
        //Variables

        let btn = document.querySelector('.new-quote');
        let quote = document.querySelector('.quote');
        let person = document.querySelector('.person');

        const quotes = [{
            quote: "I do the very best I know how - the very best I can; and I mean to keep on doing  so untill the end.",
            person: "Abraham Lincoln"

        },
        {    quote: "The best way to predict the future is to create it.",
            person: "George Bernard Shaw"
        },
        {
            quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            person: " Albert Einstein"

        },
        {
            quote: "Believe you can and you’re halfway there.",
            person: "Theodore Roosevelt"

        },
        {
            quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
            person: "Marilyn Monroe"

        },
        {
            quote: "The best preparation for tomorrow is doing your best today.",
            person: "Frank Zappa"

        },
        {
            quote: "A person who never made a mistake never tried anything new.",
            person: "Albert Einstein"

        }, 
        {
            quote: "The only way to do great work is to love what you do.",
            person: "Steve Jobs"

        },
        {
            quote: "Believe you can and you’re halfway there.",
            person: "Theodore Roosevelt"

        },
        {
            quote: "Success is not final, failure is not fatal: it is the Courage to continue that counts.",
            person: "Winston Churchill"

        }];


        btn.addEventListener('click', function(){

            let random = Math.floor(Math.random() * quotes.length);
            quote.innerText = quotes[random].quote;
            person.innerText = quotes[random].person;
        });
