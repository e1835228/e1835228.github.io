var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

var lineLables = ['January', 'February', 'March', 'April', 'May', 'June'];

var LineData={
    labels: lineLables,
    datasets:[{
        label:'初めてのグラフ',
        borderColor: 'rgb(150, 50, 60)',
        backgroundColor: 'rgb(255, 100, 130)',
        data:[0,10,15,3,20,60,10],
    }]
};

var lineConfig = {
    type: 'line',
    LineData,
    options:{},

};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig,
);

function hello(language){
    var messege ="";

    if(language == 1){
        message= "Maccas";
    } else if (language ==2 ){
        message = "Sunnies";
    } else if(language == 3){
        message = "G'day mate";
    } else {
        message ="想定されていない引数です";
    }

    alert(message);
};

lightGallery(document.getElementById('lightgallery'));
