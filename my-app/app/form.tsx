const Formulary = () => {
    return (
        
        <form className="p-8" >
            <h1 className='flex justify-center text-2xl mb-6'>Registration</h1>
            <div className='flex flex-col space-y-4'>
                <label htmlFor="">Name:</label>
            <input className='border w-[100%]' type="text" placeholder='Name'/>
            <label htmlFor="">Email:</label>
            <input className='border w-[100%]' type="text" placeholder="E-mail" />
            <label htmlFor="">Phone Number:</label>
            <input className='border w-[100%]' type="number" placeholder="Phone Number" />
            </div>
            <div>
            <button className='mt-8 rounded-[30px] bg-black text-white w-[100%] p-2' type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Formulary;