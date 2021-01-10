var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus est sed ante rhoncus iaculis. " +
    "Pellentesque nec risus lectus. Sed euismod diam et justo molestie, ut tincidunt lorem tincidunt. " +
    "Cras iaculis nisi placerat, varius justo at, consectetur lectus. Etiam porttitor sapien nibh, " +
    "non cursus massa finibus et. Fusce rhoncus accumsan purus, sit amet maximus nisl varius vitae. Maecenas " +
    "tincidunt placerat nibh eu convallis. Aenean vitae felis vitae metus iaculis pulvinar nec eu orci. Aliquam a " +
    "aliquam leo. Quisque feugiat ligula vel efficitur porttitor. Curabitur congue ex quis urna gravida aliquet. " +
    "Mauris arcu enim, pulvinar vitae nulla at, dignissim pharetra libero. ";
// შემოდის ცვლადი  lorem და ვანიჭებთ მნიშვნელობას//


var id = "container";
//შემოგვაქ ცვლადი id რომელსაც ვანიჭებთ (string)კონტეინერის მნიშვნელობას

var el = document.getElementById(id);
//შემოგვაქ ცვლადი el ,რომელსაც გამოაქ document-იდან ელემენტი id,id-ის მიხედვით//

for (var i = 0; i < 10; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    for (var j = 0; j < 3; j++) {
        var col = document.createElement("div");
        col.classList.add("col");
        col.innerHTML = lorem;
        col.style.backgroundColor = "#5" + i + j * 4;
        row.appendChild(col);
    }
    //for არის ბრძანებარომელიც გამეორების საშუალებას გვაძლევს, შემდეგ შემოგვაქ ცვლადი i რომლის საწისი მნიშვნელობა ნულია და მისი რაოდენობა ყოველ ჯერზე ერთით იმატებს//
    //შემოდის ცვლადი row, რომელიც ქმნის ელემენტს div//
    //ცვლად rowს ენიჭება კლასი row//
    //შემოდის ცვლადი ј//
    //ცვლადი col დოკუმენტში ქმნის div ელემენტს//
    //ცვლად colს ენიჭება კლასი col//
    //ცვლადი colის შიდა htmlში იწერება loremის მნიშვნელობა//
    //ცვლად cols ენიჭება ფერი რომელიც რაღაც პროგრესიით იცვლება//
    //ცვლადი col თავსდება rowს შიგნით//
    //მთავრდება ლუპი//
    el.appendChild(row);
}
//ცვლადი row თავსდება ცვლად elში, რომელიც თვითნაა conteinerი//