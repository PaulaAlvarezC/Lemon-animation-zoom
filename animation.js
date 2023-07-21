// Option 1: Global function
pushInStart({
    composition: {
      ratio: [16, 9],
    }
  });
  
  // Option 2: Class constructor
  const pushIn = new PushIn(
    document.querySelector('.pushin'),
    {
      composition:{
        ratio: [16, 9],
      }
    }
  );
  pushIn.start();