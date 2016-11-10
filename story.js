//"<h2>There once was a" + adjective; += 'programmer who wanted to learn' + verb; += noun + 'the' + '.</h2>';
var adjective = prompt("insert adjective");
var sentence = "<h2> There once was a " + adjective;
var verb = prompt("insert verb");
var noun = prompt("insert noun");
alert('All done. Ready for message?');
sentence += ' programmer who wanted to learn JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';
document.write(sentence);