        const form = document.querySelector('form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const coffeeSelect = document.getElementById('coffee');
        const sizeInputs = document.querySelectorAll('input[name="size"]');
        const extrasInputs = document.querySelectorAll('input[name="extras"]');
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!validateForm()) {
                return;
            }
            placeOrder();
        });
        
        function validateForm() {
            let isValid = true;
            let errorMessage = '';
        
            if (nameInput.value === '') {
                errorMessage += 'Name is required. ';
                isValid = false;
            }
        
            if (emailInput.value === '') {
                errorMessage += 'Email is required. ';
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                errorMessage += 'Email is invalid. ';
                isValid = false;
            }
        
            if (coffeeSelect.value === '') {
                errorMessage += 'Coffee selection is required. ';
                isValid = false;
            }
        
            if (!isSizeSelected()) {
                errorMessage += 'Size selection is required. ';
                isValid = false;
            }
        
            if (errorMessage !== '') {
                showErrorMessage(errorMessage);
            }
        
            return isValid;
        }
        
        function placeOrder() {
            const orderDetails = {
                name: nameInput.value,
                email: emailInput.value,
                coffee: coffeeSelect.value,
                size: getSizeValue(),
                extras: getExtrasValues(),
            };
            console.log('Order details:', orderDetails);
            showSuccessMessage('Order placed successfully!');
            form.reset();
        }
        
        function isValidEmail(email) {
            const emailRegex = /^\S+@\S+\.\S+$/;
            return emailRegex.test(email);
        }
        
        function isSizeSelected() {
            let isChecked = false;
            sizeInputs.forEach((input) => {
                if (input.checked) {
                    isChecked = true;
                }
            });
            return isChecked;
        }
        
        function getSizeValue() {
            let sizeValue = '';
            sizeInputs.forEach((input) => {
                if (input.checked) {
                    sizeValue = input.value;
                }
            });
            return sizeValue;
        }
        
        function getExtrasValues() {
            const extrasValues = [];
            extrasInputs.forEach((input) => {
                if (input.checked) {
                    extrasValues.push(input.value);
                }
            });
            return extrasValues;
        }
        
        function showErrorMessage(message) {
            const errorDiv = document.createElement('div');
            errorDiv.classList.add('error');
            errorDiv.textContent = message;
            form.insertBefore(errorDiv, form.firstChild);
            setTimeout(() => {
                errorDiv.remove();
            }, 3000);
        }
        
        function showSuccessMessage(message) {
            const successDiv = document.createElement('div');
            successDiv.classList.add('success');
            successDiv.textContent = message;
            form.insertBefore(successDiv, form.firstChild);
            setTimeout(() => {
                successDiv.remove();
            }, 3000);
        }