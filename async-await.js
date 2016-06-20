

function log() {
    console.log.apply(this, arguments);
}


function getAuthor(id) {
    return new Promise(function (resolve, reject) {
        $.ajax("http://beta.json-generator.com/api/json/get/E105pDLh", {
            author: id
        }).done(function (result) {
            resolve(result);
        })
    });
}

function getArticle(id) {
    return new Promise(function (resolve, reject) {
        $.ajax("http://beta.json-generator.com/api/json/get/EkI02vUn", {
            id: id
        }).done(function (result) {
            //resolve(result);
            reject(1)
        })
    });
}

function getArticleList() {
    return new Promise(function (resolve, reject) {
        $.ajax(
            "http://beta.json-generator.com/api/json/get/Ey8JqwIh")
            .done(function (result) {
                //resolve(result);
                reject('reject')
            });
    });
}

function runStyle1() {
    function* run() {
        var articles = yield getArticleList();
        var article = yield getArticle(articles[0].id);
        var author = yield getAuthor(article.authorId);
        console.log(author);
    }

    var gen = run();
    gen.next().value.then(function (r1) {
        gen.next(r1).value.then(function (r2) {
            gen.next(r2).value.then(function (r3) {
                gen.next(r3);
                console.log(r3);
                console.log("done");
            })
        })
    }, function(rej){
        console.log('rej:' + rej)
    })
}

function runStyle2() {
    function* run() {
        var articles = yield getArticleList();
        var article = yield getArticle(articles[0].id);
        var author = yield getAuthor(article.authorId);
        console.log(author);
    }
    function runGen() {
        var gen = run();
        function go(result) {
            if (result.done) {
                return;
            }
            result.value.then(function (r) {
                go(gen.next(r));
            })
        }
        go(gen.next());
    }
    runGen();
}

function runStyle3() {
    async function runA() {
        var articles = await getArticleList();
        var article = await getArticle(articles[0].id);
        var author = await getAuthor(article.authorId);
        console.log(author.email);
    }
    runA();
}



