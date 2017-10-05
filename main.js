//make the enter key work 
document.getElementById("artistSearch")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            document.getElementById("confirm").click();
        }
    });

function getJSONPByCallbacks(url, successHandler, errorHandler) {
    var name = 'jsonp' + new Date().getTime();
    if (url.match(/\?/)) url += '&callback=' + name;
    else url += '?callback=' + name;

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    window[name] = function (data) {
        document.getElementsByTagName('head')[0].removeChild(script);
        script = null;
        delete window[name];

        successHandler && successHandler(data);
    };

    document.getElementsByTagName('head')[0].appendChild(script);
}

var elSearch = document.getElementById('artistSearch');
var btnConfirm = document.getElementById('confirm');
btnConfirm.onclick = function () {

    //the artist string
    var artistNameElement = elSearch.value;

    //remove space
    artistNameElement = artistNameElement.replace(/\s/g, '');

    //make string lower
    artistNameElement = artistNameElement.toLowerCase();

    console.log(artistNameElement)
    var searchResultsElement = document.querySelector('.searchResults');
    var albumCheckElement = document.querySelectorAll('.album')


    //check if there is an earlier search an removes it

    for (var i = 0; i < albumCheckElement.length; i++) {
        var elem = albumCheckElement[i]
        elem.remove();
    }

    getJSONPByCallbacks(
        `https://itunes.apple.com/search?term=${artistNameElement}&entity=album`,
        function (data) {



            for (var i = 0; i < data.results.length; i++) {


                var tempStr = '';
                var i;
                var result = data.results[i];


                tempStr +=
                    `       
                <div class="album">
                <img src="${result.artworkUrl100}" alt="album"> <br>
                <div class="text">
                    <span class="albumname"> ${result.collectionName} </span> <br>
                    <span class="artist"> ${result.artistName} </span> <br>
                </div>    
                </div
        `
                searchResultsElement.innerHTML += tempStr;


            }

        },
        function (error) {
            console.log(error);
        }
    );
    //aflsuiting btn functie
};
