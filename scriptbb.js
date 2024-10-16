
	const input1 = document.querySelector("#bish")	
	const input2 = document.querySelector("#bosh")	
	const input3 = document.querySelector("#iterationer")	

	const out1 = document.querySelector("#output")

	button1.addEventListener("click", myFunction)
	

	function myFunction() {
 		console.log(input3.value)

		while (out1.hasChildNodes()) {
  			out1.removeChild(out1.firstChild);
		}

		for(c = 1;c <= input3.value;c++)
		{
			if((c % input1.value) == 0 && (c % input2.value) == 0)
			{
				const para = document.createElement('p')
				para.innerHTML = 'Bish-Bosh ' + c	
				out1.appendChild(para)
			}
			
			else if((c % input1.value) == 0)
			{
				const para = document.createElement('p')
				para.innerHTML = 'Bish '	+ c
				out1.appendChild(para)
			}

			else if((c % input2.value) == 0)
			{
				const para = document.createElement('p')
				para.innerHTML = 'Bosh '	+ c
				out1.appendChild(para)
			}
			
			else
			{
				const para = document.createElement('p')
				para.innerHTML = c
				out1.appendChild(para)
			}
					
		}
	}
	
		
	
	