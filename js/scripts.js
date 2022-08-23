// Custom Scripts
// Custom scripts
function stepForm() {
    const steps = document.querySelectorAll('.form__step')
    const prevBtn = document.querySelector('.prev__stepp')
    const nextBtn = document.querySelector('.next__stepp')
    const form = document.querySelector('.steps__form')
    const stepNumbers = document.querySelectorAll('.step__number')
    const progress = document.querySelector('.progress__success')
    const finishBlock = document.querySelector('.finish')

    form.addEventListener('submit', (e) => e.preventDefault())

    let formStepIndex = 0

    prevBtn.addEventListener('click', () => {
        formStepIndex--

        stepNumbers[formStepIndex + 1].classList.remove('active__number')

        updateformSteps()
    })
    
    nextBtn.addEventListener('click', () => {
        if (formStepIndex < steps.length - 1) {
            formStepIndex++
            updateformSteps()
        }
    })

    function updateformSteps() {
        steps.forEach((step) => {
            step.classList.contains('active') && step.classList.remove('active')
        })

        steps[formStepIndex].classList.add('active')
        stepNumbers[formStepIndex].classList.add('active__number')

        if(formStepIndex === 0) {
            prevBtn.style.display = 'none'
        } else {
            prevBtn.style.display = 'block'
        }

        if(formStepIndex === steps.length - 1) {
            nextBtn.innerHTML = 'Finish'

            nextBtn.addEventListener('click', () => {
                finishBlock.style.display = 'block'
                form.style.display = 'none'
            })

        } else {
            nextBtn.innerHTML = 'Next'
        }

        const actives = document.querySelectorAll('.active__number')
        const percent = ((actives.length - 1) / (stepNumbers.length - 1)) * 100 + '%'

        progress.style.width = percent


    }

    updateformSteps()






}

if (document.querySelector('.form__step')) {
    stepForm()
}

