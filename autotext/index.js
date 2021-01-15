const textel=document.getElementById('text')
const speed1=document.getElementById('speed')

const text="My Name is AKARSH RAJ."

let idx=1

let speed=300/speed1.value


writeText()

function writeText(){
	textel.innerText=text.slice(0,idx)

	idx++

	if(idx>text.length){
		idx=1
	}

	setTimeout(writeText,speed)

}