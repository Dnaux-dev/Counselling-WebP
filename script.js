const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const passwordStepNum = 1; 
const confirmPasswordStepNum = 2;

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (validateFormStep(formStepsNum)) {
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
    }
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

function validateFormStep(step) {
  if (step === 0) {
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    if (!selectedGender) {
      alert("Please select your gender.");
      return false;
    }
  }
  else if(step===1) {
    const checkedTherapy = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (checkedTherapy === 0) {
      alert("Please why do you consider therapy?");
      return false;
    }
  }

  else if (step === 2) {
      const selectedSpirituality = document.querySelector('input[name="spiritual"]:checked');
      if (!selectedSpirituality) {
        alert("Please select.");
        return false;
      }
    } 
  else if (step === 3) {
    const selectedReligion = document.querySelector('input[name="religion"]:checked');
    if (!selectedReligion) {
      alert("Please select Religion");
      return false;
    }
  }

  else if (step === 4) {
    const relationshipSta = document.querySelector('input[name="relationship"]:checked');
    if (!relationshipSta) {
      alert("Please indicate relationship status");
      return false;
    }
  }
   else if (step === 5) {
    const selectedAge = document.getElementById('age').value;
    if (selectedAge === 'select age') {
      alert("Please select your age.");
      return false;
    }
  } 
  else if (step === 6) {
    const IssueCount = document.querySelector('input[name="issue"]:checked');
    if (!IssueCount) {
      alert("Please select at least one issue.");
      return false;
    }
  } 
  else if (step === 7) {
    const therapyCount = document.querySelector('input[name="therapy"]:checked');
    if (!therapyCount) {
      alert("Please select if you've been in therapy.");
      return false;
    }
  } 
  else if (step === 8) {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (!selectedRating) {
      alert("Please rate your relationship with your parent.");
      return false;
    }
  } 
  else if (step === 9) {
    const selectedCountry = document.getElementById('country').value;
    if (selectedCountry === 'select country') {
      alert("Please select your country.");
      return false;
    }
  }
  else if (step === 10) {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    
    if (!firstName || !lastName) {
      alert("Please enter both first name and last name.");
      return false;
    }
  }
   else if (step === passwordStepNum) {
    const password = document.getElementById('password').value;
    
    if (!password) {
      alert("Please enter a password.");
      return false;
    }
  } 
  else if (step === confirmPasswordStepNum) {
    const confirmPassword = document.getElementById('confirm-password').value;
    const password = document.getElementById('password').value;
    
    if (confirmPassword !== password) {
      alert("Passwords do not match.");
      return false;
    }
  }

  return true; 
}


