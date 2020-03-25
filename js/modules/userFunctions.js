/**
 * Funktioner som gör det möjligt att söka på bilder, 
 * samt att rensa sök rutan efter sökning 
 * -----------------------------------------------------
 */

export function getInputValue(){
    return document.getElementById("search-field").value;
};

export function getNumberOfImages(){
    let select = document.getElementById("numbers-displayed");
    let selected = select.value;
        return parseInt(selected, 10);
};

export function clearSearch(){
    document.getElementById("search-form").reset();
};