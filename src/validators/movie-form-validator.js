export const validate = (values = {director: {}}) => {
	let errors = {};
	Object.assign(errors, validateTitle(values.title));
	Object.assign(errors, validateDirector(values.director));
	Object.assign(errors, validateDuration(values.duration));
	Object.assign(errors, validateYear(values.year));
	return errors;
};

const validateTitle = (title) => {
	return requiredString(title, 'title', 'Title is required.');
}

const validateDirector = (director = {}) => {
	const firstNameError = requiredString(director.firstName, 'firstName', 'First name is required.');
	const lastNameError = requiredString(director.lastName, 'lastName', 'Last name is required.');
	if (firstNameError || lastNameError) {
		return {director: Object.assign(firstNameError ? firstNameError : {}, lastNameError ? lastNameError : {})};
	}
}

const validateDuration = (duration) => {
	return numberInRange(duration, 0, 60000, 'duration', 'Duration must be between 0 and 60.000.')
}

const validateYear = (year) => {
	return numberInRange(year, 1880, 2100, 'year', 'Year must be between 1880 and 2100.');
}

const requiredString = (text, fieldName, errorMessage) => {
	if (!text || text.length < 1) {
		return createErrorMessage(fieldName, errorMessage);
	}
};

const positiveNumber = (number, fieldName, errorMessage) => {
	if (!number || number < 0) {
		return createErrorMessage(fieldName, errorMessage);
	}
};

const numberInRange = (number, min, max, fieldName, errorMessage) => {
	if (!number || (number >= max || number <= min)) {
		return createErrorMessage(fieldName, errorMessage);
	}
};

const createErrorMessage = function (fieldName, errorMessage) {
	let errors = {};
	errors[fieldName] = errorMessage;
	return errors;
};
