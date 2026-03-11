const btn = document.getElementById("btn")
const nameInput = document.getElementById("name")
const result = document.getElementById("result")

btn.onclick = () => {

const name = nameInput.value

fetch(`https://api.nationalize.io/?name=${name}`)
.then(res => res.json())
.then(data => {

result.innerHTML = ""

data.country.forEach(c => {

const percent = (c.probability * 100).toFixed(1)

const div = document.createElement("div")
div.className = "country"

div.innerHTML = `
<img src="https://flagsapi.com/${c.country_id}/flat/32.png">
<p>${c.country_id} - ${percent}%</p>
`

result.appendChild(div)

})

})

}