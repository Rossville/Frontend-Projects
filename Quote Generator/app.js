const quotation = [
    "You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write.",
    "Indeed, learning to write may be part of learning to read. For all I know, writing comes out of a superior devotion to reading.",
    "Read, read, read. Read everything — trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window.",
    "I kept always two books in my pocket: one to read, one to write in.",
    "The Six Golden Rules of Writing: Read, read, read, and write, write, write.",
    "The greatest part of a writer's time is spent in reading, in order to write; a man will turn over half a library to make one book.",
    "Read a thousand books, and your words will flow like a river."
]


const author = [
    "Annie Proulx",
    "Eudora Welty",
    "William Faulkner",
    "Robert Louis Stevenson",
    "Ernest Gaines",
    "Samuel Johnson",
    "Lisa See"
]


const quote = document.getElementsByClassName('quotation')[0];

const quoteAuthor = document.getElementsByClassName('author')[0];

const generate = document.getElementsByClassName('generate-btn')[0];

generate.addEventListener('click',()=>{

    const num = Math.floor(Math.random()*author.length);
    quote.innerHTML = quotation[num];
    quoteAuthor.innerHTML = author[num];
});

const copy = document.getElementsByClassName('copy-btn')[0];

let flag = false;

copy.addEventListener('click',()=>{
    flag = true;
    navigator.clipboard.writeText(quote.textContent);
})

const textcopyDisplay = document.getElementsByClassName('textcopy-display')[0];

if(flag){
    textcopyDisplay.style.display = 'block';
}