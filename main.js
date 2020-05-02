window.onload = function onLoad() {
    var algo = new ProgressBar.Circle('#dsalgo', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: '3'
    });

    algo.animate(0.81);

  


  var java = new ProgressBar.Circle('#java', {
        color: '#17a2b8',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: '2'
    });

    java.animate(0.88);

   var design = new ProgressBar.Circle('#design', {
        color: '#6f42c1',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: '3'
    });

    design.animate(0.80);



   var sb = new ProgressBar.Circle('#sb', {
        color: '#fd7e14',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: '2'
    });

    sb.animate(0.86);



  var ut = new ProgressBar.Line('#ut', {
  strokeWidth: 2,
  easing: 'easeInOut',
  duration: 1400,
  color: '#28a745',
  trailColor: '#28a745',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FFEA82'},
  to: {color: '#28a745'},
  step: (state, bar) => {
    //bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

ut.animate(0.95);  


var rest = new ProgressBar.Line('#rest', {
  strokeWidth: 2,
  easing: 'easeInOut',
  duration: 1400,
  color: '#e23028',
  trailColor: '#e23028',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FFEA82'},
  to: {color: '#28a745'},
  step: (state, bar) => {
    //bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

rest.animate(0.91);  


var java2 = new ProgressBar.Line('#java2', {
  strokeWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  color: '#28a745',
  trailColor: '#D3D3D3',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '100%'},
  step: (state, bar) => {
    //bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

java2.animate(0.9);

var ruby = new ProgressBar.Line('#ruby', {
  strokeWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  color: '#28a745',
  trailColor: '#D3D3D3',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '100%'},
  step: (state, bar) => {
    //bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

ruby.animate(0.7);



var js = new ProgressBar.Line('#js', {
  strokeWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  color: '#28a745',
  trailColor: '#D3D3D3',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '100%'},
  step: (state, bar) => {
    //bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

js.animate(0.7);




var ror = new ProgressBar.Line('#ror', {
  strokeWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  color: '#4c75f299',
  trailColor: '#D3D3D3',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '100%'},
  step: (state, bar) => {
    //bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

ror.animate(0.5);



var sql = new ProgressBar.Line('#sql', {
  strokeWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  color: '#4c75f299',
  trailColor: '#D3D3D3',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '100%'},
  step: (state, bar) => {
    //bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

sql.animate(0.7);


var sb2 = new ProgressBar.Line('#sb2', {
  strokeWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  color: '#4c75f299',
  trailColor: '#D3D3D3',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '100%'},
  step: (state, bar) => {
    //bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

sb2.animate(0.8);

    };