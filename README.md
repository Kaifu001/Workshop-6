What I Learned:
p5.js Basics:

Learned how to create an input field (createInput()) and a button (createButton()) to interact with the user.
Used the text() function to display the output on the canvas.
RiTa Library:

Learned to use RiTa.tokenize() to break a line of text into words.
Used RiTa.rhymes() and RiTa.similarBySound() to find words that rhyme or sound similar to the user’s input.
How the Code Works:
The app starts with an input field and a button. When the user enters a keyword and clicks the "Find" button, the app:
Tokenizes each line of the original poem.
Replaces the keyword with rhymes or synonyms, and displays the new poem.
Problem Solving:
Issue:
Initially struggled with ensuring that the text display updated correctly after each user input.

Solution:
Used the text() function in the draw() loop to ensure the updated poem is shown continuously.

Further Development Ideas:
Allow the user to input their own poem or lines.
Add more complex transformations, such as altering sentence structure or word order. 
