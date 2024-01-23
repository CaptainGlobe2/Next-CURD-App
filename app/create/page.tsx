export default function CreatePage(){
    return <div>
        <h2 className="text-2xl font-bold my-8">Add New Interpretation</h2>
        <form className="flex gap-3 flex-col">
            <input type="text" name="term" placeholder="Term" className="py-1 px-4 border rounded-md"/>
            <textarea name="interpretation" rows={4} placeholder="Interpretation" className="py-1 px-4 border rounded-md resize-none"></textarea>
            <button className="bg-black text-white mt-5 px-4 py-1 rounded-md cursor-pointer">Add Interpretation</button>
        </form>
        
    </div>
}