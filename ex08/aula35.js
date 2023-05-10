const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")
const btn2 = document.querySelector("#btn_copiar2")
const allcurso= [...document.querySelectorAll(".curso")]

allcurso.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso=evt.target
        console.log(curso)
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click", ()=>{
    const cursosSelecionados= [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })

})
btn2.addEventListener("click", ()=>{
    const cursosSelecionados= [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })

})