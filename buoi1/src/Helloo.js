function Helloo(){
	const hiAll=()=>{
        alert("hello everyone")
    }

    const hiYou=(name)=>{
        alert("Hello "+ name)
    }


   return (
        <div>
            <h1>Xin chào bạn</h1>
            {/* Nút gọi hiAll */}
            <button onClick={hiAll}>Siuuuuuuuuuuuuuuuuuuuuu</button>
            
            {/* Nút gọi hiYou với giá trị name là "Nguyen Van A" */}
            <button onClick={() => hiYou("Thyennnnnnnnnnnn")}>Siuuuuuuuuuuuuuuuuuu</button>
        </div>
    );
}

export default Helloo;