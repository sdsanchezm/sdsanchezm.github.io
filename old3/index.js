const app1 = document.querySelector("#app1");

function createlinks1(link1=link1, name1=name1){
    // <li><a href="https://github.com/sdsanchezm/javascript-all" rel="" target="_blank">Javascript</a></li>
    let li1 = document.createElement('li');
    let a1 = document.createElement('a');
    a1.href = link1;
    a1.innerHTML = name1;
    li1.appendChild(a1);
    return li1;
}

repolist1 = [
    {
        "name": "javascript-all",
        "link": "https://github.com/sdsanchezm/javascript-all"
    },
    {
        "name": "python-all",
        "link": "https://github.com/sdsanchezm/python-all"
    },
    {
        "name": "typescript-all",
        "link": "https://github.com/sdsanchezm/typescript-all"
    },
    {
        "name": "csharp-all",
        "link": "https://github.com/sdsanchezm/csharp-all"
    },
    {
        "name": "docker-all",
        "link": "https://github.com/sdsanchezm/docker-all1"
    },
    {
        "name": "kommandozeile-all",
        "link": "https://github.com/sdsanchezm/kommandozeile-all"
    },
	{
		"name": "react-all",
		"link": "https://github.com/sdsanchezm/react-all"
	},
    {
        "name": "sql-all",
        "link": "https://github.com/sdsanchezm/SQL-all"
    },
    {
        "name": "CompSci50",
        "link": "https://github.com/sdsanchezm/computerscience50w"
    },
    {
        "name": "npm bootstrap starter",
        "link": "https://github.com/twbs/bootstrap-npm-starter"
    },
    {
        "name": "main",
        "link": "https://github.com/sdsanchezm"
    }
]

let temp1 = [];

repolist1.map( (x) => {
    let xx1 = createlinks1(link1=x.link, name1=x.name);
    app1.appendChild(xx1);
})



