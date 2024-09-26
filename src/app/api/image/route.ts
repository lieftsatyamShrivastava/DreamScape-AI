import { authOptions } from "@/utils/authOptions";
import prisma from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const session = await getServerSession(authOptions);
  // console.log("session", session)
  // console.log("body", body)
  if (!session || (session.user?.email !== body.email)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: body.email }
  });

  

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 100000000) + 1;
  }
  const randomSeed = generateRandomNumber();
  const imageURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    body.prompt
  )}?seed=${randomSeed}&width=512&height=512&nologo=True`;

  // await fetch(imageURL);

  await prisma.post.create({
    data: {
     prompt: body.prompt,
      url: imageURL,
      seed: randomSeed,
      userId: user!.id,
    },
  });

  return NextResponse.json({ url: imageURL });
}

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "You are Unauthorized" },
      { status: 401 }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "No user found" }, { status: 401 });
  }

  const posts = await prisma.post.findMany({
    where: {
      userId: user.id,
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(posts);
}