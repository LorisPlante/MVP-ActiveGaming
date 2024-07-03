import { connectMongoDB } from "@/lib/mongodb";
import BattlePass from "@/models/BattlePass";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  try {
    const battlePasses = await BattlePass.find({});
    return NextResponse.json(battlePasses, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch battle passes" }, { status: 500 });
  }
}
