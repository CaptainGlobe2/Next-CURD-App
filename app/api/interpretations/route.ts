import client from "@/lib/appwrite_client";
import { Databases, ID, Query } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client);

async function createInterpretation(data:{term:string,interpretation:string}) {
    try{
        const respose = await database.createDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,"Interpretations",ID.unique(),data);
        return respose;
    }catch(error){
        console.error('Error creating interpretation',error);
        throw new Error("Failed to create interpretation");
    }


    
}

async function fetchInterpretations() {
    try{
        const respose = await database.listDocuments(process.env. NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,"Interpretations",[Query.orderDesc("$createdAt")]);
        return respose.documents;
    }catch(error){
        console.error('Error fetching interpretation',error);
        throw new Error("Failed to fetch interpretation");
    }
}

export async function POST(req: Request) {
    try{
        const {term,interpretation} =await req.json();
        const data = {term,interpretation};
        const respose = await createInterpretation(data);
        return NextResponse.json({message:"Interpretation created"})
    }catch(error){
        return NextResponse.json({error:"Failed to create interpretation"},{status:500});
    }
}

export async function GET(){
    try{
        const interpretations = await fetchInterpretations();
        return NextResponse.json(interpretations);
    }catch(error){
        return NextResponse.json({error:"Failed to fetch interpretations"},{status:500});
    }
}

