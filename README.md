## Calculator Project
I learned so much during this project it's unreal.

I gave a really earnest attempt (several actually) with making the calculator work but kept getting hung up with so many small things that drove me insane. While the approach I took the first time worked, it couldn't handle decimal points or multiple operations (eg. 2+2+2=) without completely shattering. I also was struggling to get my calculator formatted at all, and while I'm sure I could've made it a lot prettier, it wasn't anywhere close to where I wanted it to be by the time I gave up.

I put off the calculator project for weeks because I wanted to figure it out, and in looking for solutions I found a really good guide on a 'from-scratch' HTML, CSS, JS calculator that seemed like exactly what I wanted to make. 

This is the video I followed step-by-step
https://www.youtube.com/watch?v=j59qQ7YWLxw

While it was definitely a small hit to my pride, following along with this guide taught me more than I've learned in in countless hours tinkering with my taped-together calculator and I'm glad I watched and followed along.

## What I learned

Using grid rather than flex box really seemed like a nice way to make something that needed defined columns and rows. I've been using flexbox almost TOO MUCH since I learned it existed and now knowing that I can define and amount of rows and columns means I can stop nesting flexboxes when I need that sort of functionality.

Since I've started with JavaScript I've been using class names to indentify DOM elements and it's become confusing and messy, and the video's approach of using data-tags in the elements to create a difference between CSS variables and JS variables seems to be a great approach to keep things clean and organized.

While I knew nothing about Grid functionality in CSS before, and still don't know a lot, the implementation of the span-two class function to change how many columns an element would take really made a lot of sense, and it's definitely something I need to explore more through documentation.

At this point, I'm still confused as to why we created a class for the calculator, since we only ever create one calculator variable. Sure this makes a lot of sense for scalability but would I ever need two calculators on the screen? In that same vein, the way variables were defined within the functions like 'this.previousOperand' and 'this.currentOperand' was confusing, as these were similar to variables I had previously set 'consts' for and thought I was missing a definition somewhere else in my code. 

While the process of creating the class, the functions, and the implementation of them made a lot of sense to me in the moment, it just feels like a layer of confusion and a whole lot of unnnesscary 'this' statements and I definitely would love to learn why the creator did it that way.

Through the bulk of the video I was able to follow along 1:1 without pausing or rewinding because a lot of the underlying code and computations were similar to my first attempt. Where I found myself stopping to better understand what the creator was doing was the solutions to the problems I had with my best attempt. Aside from the comma delimitting, a lot of his solutions were very intuitive and easy to implement, and I think that's thanks to the strong foundation of his previous code and while I completely understand how we implemented multiple operations or decimal points, I think I would still struggle to add it to my previous code because of how poorly structured it was written.

All in all, this video really helped a ton and while I may not have done it myself, I am glad I followed along to learn a lot and feel a lot more comfortable not only in making a calculator but in my webdev skills as a whole.