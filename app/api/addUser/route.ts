import { NextResponse , NextRequest} from "next/server";  // Next.js 13+ uses this for API routes
import connectMongo from "@/lib/mongoose"; // Import the MongoDB connection
import User from "@/lib/models/user"; // Import the User model

export async function POST(req: NextRequest) {
  
    
    try {
    const { email } = await req.json();  // Parse the JSON body

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    await connectMongo();  // Connect to MongoDB

    const existingEntry = await User.findOne({ email });

   
    if (existingEntry) {
        return NextResponse.json({ message: "You have already joined the waitlist." }, { status: 400 });
      }
  
    const newUser = new User({ email });
    await newUser.save();  // Save the user to MongoDB

    return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: "Error creating user", error: error.message }, { status: 500 });
  }
}
