var image = null;
var grayImage = null;
var redImage = null;
var greenImage = null;
var blueImage = null;
var rainbowImage = null;
var negativeImage = null;
var windowImage = null;
var mirrorImage = null;
var frameImage = null;
var t = 10;
var s = 20;
var canvas = document.getElementById("can");

//uploading image into canvas
function uploadImage(){
  var fileinput = document.getElementById("file");
image = new SimpleImage(fileinput);
  grayImage = new SimpleImage(fileinput);
  redImage = new SimpleImage(fileinput);
  greenImage = new SimpleImage(fileinput);
  blueImage = new SimpleImage(fileinput);
  rainbowImage = new SimpleImage(fileinput);
  negativeImage = new SimpleImage(fileinput);
  windowImage = new SimpleImage(fileinput);
  mirrorImage = new SimpleImage(fileinput);
  frameImage = new SimpleImage(fileinput);
  image.drawTo(canvas);
}

/*to check whether the image is loaded or not*/
function imageIsLoaded(img){
  if(img == null || !img.complete()){
    alert("Image is not loaded! Please try again");
    return false;
  }
  else{
    return true;
  }
}


//function to apply gray filter
function doGray(){
  if(imageIsLoaded(grayImage)){
    grayFilter();
    grayImage.drawTo(canvas);
  }
}

function grayFilter(){
  for(var pixel of grayImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

//function to apply red filter
function doRed(){
  if(imageIsLoaded(redImage)){
    redFilter();
    redImage.drawTo(canvas);
  }
}

function redFilter(){
  for(var pixel of redImage.values()){
     var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg < 128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen((2*avg)-255);
      pixel.setBlue((2*avg)-255);
    }
  }
}

//function to apply green filter
function doGreen(){
  if(imageIsLoaded(greenImage)){
    greenFilter();
    greenImage.drawTo(canvas);
  }
}

function greenFilter(){
  for(var pixel of greenImage.values()){
     var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg < 128){
      pixel.setRed(0);
      pixel.setGreen(2*avg);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed((2*avg)-255);
      pixel.setGreen(255);
      pixel.setBlue((2*avg)-255);
    }
  }
}

//function to apply blue filter
function doBlue(){
  if(imageIsLoaded(blueImage)){
    blueFilter();
    blueImage.drawTo(canvas);
  }
}

function blueFilter(){
  for(var pixel of blueImage.values()){
     var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg < 128){
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(2*avg);
    }
    else{
      pixel.setRed((2*avg)-255);
      pixel.setGreen((2*avg)-255);
      pixel.setBlue(255);
    }
  }
}

//function to apply rainbow filter
function doRainbow(){
  if(imageIsLoaded(rainbowImage)){
    rainbowFilter();
    rainbowImage.drawTo(canvas);
  }
}

function rainbowFilter()
{
  var h= rainbowImage.getHeight();
  for(var pixel of rainbowImage.values())
    {
      var y=pixel.getY();
      var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if(y<h/7)
      {
        //red color
        if (avg<128)
          {
            pixel.setRed(2*avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
          }
        else
          {
            pixel.setRed(255);
            pixel.setGreen((2*avg)-255);
            pixel.setBlue((2*avg)-255);
          }
      }
      else if (y<h*2/7)
      {
        //orange color
        if(avg<128)
          {
            pixel.setRed(2*avg);
            pixel.setGreen(0.8*avg);
            pixel.setBlue(0);
          }
        else
        {
          pixel.setRed(255);
          pixel.setGreen((1.2*avg)-51);
          pixel.setBlue((2*avg)-255);
        }
      }
      else if(y<h*3/7)
        {
          //yellow color
          if(avg<128)
            {
              pixel.setRed(2*avg);
              pixel.setGreen(2*avg);
              pixel.setBlue(0);
            }
          else
            {
              pixel.setRed(255);
              pixel.setGreen(255);
              pixel.setBlue((2*avg)-255);
            }
        }
      else if (y<h*4/7)
        {
          //green color
          if(avg<128)
            {
              pixel.setRed(0);
              pixel.setGreen(2*avg);
              pixel.setBlue(0);
            }
          else
            {
              pixel.setRed((2*avg)-255);
              pixel.setGreen(255);
              pixel.setBlue((2*avg)-255);
            }
        }
      else if(y<h*5/7)
        {
          //blue color
          if(avg<128)
            {
              pixel.setRed(0);
              pixel.setGreen(0);
              pixel.setBlue(2*avg);
            }
          else
            {
              pixel.setRed((2*avg)-255);
              pixel.setGreen((2*avg)-255);
              pixel.setBlue(255);
            }
        }
      else if(y<h*6/7)
        {
          //indigo color
          if(avg<128)
            {
              pixel.setRed(0.8*avg);
              pixel.setGreen(0);
              pixel.setBlue(2*avg);
            }
          else
            {
              pixel.setRed((1.2*avg)-51);
              pixel.setGreen((2*avg)-255);
              pixel.setBlue(255);
            }
        }
      else
        {
          //violet color
          if(avg<128)
            {
              pixel.setRed(1.6*avg);
              pixel.setGreen(0);
              pixel.setBlue(1.6*avg);
            }
          else
            {
              pixel.setRed((0.4*avg)+153);
              pixel.setGreen((2*avg)-255);
              pixel.setBlue((0.4*avg)+153);
            }
        }
    }
}

//function to apply negative filter
function doNegative(){
  if(imageIsLoaded(negativeImage)){
    negativeFilter();
    negativeImage.drawTo(canvas);
  }
}

function negativeFilter(){
  for(var pixel of negativeImage.values()){
    var newRed = 255 - pixel.getRed();
    var newGreen = 255 - pixel.getGreen();
    var newBlue = 255 - pixel.getBlue();
    pixel.setRed(newRed);
    pixel.setGreen(newGreen);
    pixel.setBlue(newBlue);
  } 
}

//function to apply window pane
function doWindow(){
  if(imageIsLoaded(windowImage)){
    windowPane();
    windowImage.drawTo(canvas);
  }
}

function windowPane(){
  for(var pixel of windowImage.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var w = windowImage.getWidth();
    var h = windowImage.getHeight();
    if(x<=t || x>w-t || y<=t || y>h-t){
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    if(x>(w/3) && x<=(w/3)+10 || x>(w*2/3) && x<=(w*2/3)+t || y>(h/3) && y <=(h/3)+10 || y>(h*2/3) && y<=(h*2/3)+t){
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
  }
}

//function to apply mirror filter
function doMirror(){
  if(imageIsLoaded(mirrorImage)){
    mirrorFilter();
  }
}
function mirrorFilter(){
  var output = new SimpleImage(mirrorImage.getWidth(),mirrorImage.getHeight());
   for(var pixel of mirrorImage.values()){  
     var x= pixel.getX();
     var y= pixel.getY();
       if(x<=mirrorImage.getWidth()/2){
        output.setPixel(mirrorImage.getWidth()-x-1,y,pixel);
    }
    else{
        output.setPixel(mirrorImage.getWidth()-x-1,y,pixel);
    }
    }
  output.drawTo(canvas);
}

//function to apply frame filter
function doFrame(){
  if(imageIsLoaded(frameImage)){
    frameFilter();
    frameImage.drawTo(canvas);
  }
}

function frameFilter(){
  for(var pixel of frameImage.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var w = windowImage.getWidth();
    var h = windowImage.getHeight();
    if(x<=s || x>w-s || y<=s || y>h-s){
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
  }
}
 
//function to reset all
function doReset(){
  if(imageIsLoaded(image)){
    uploadImage();
    // grayImage = new SimpleImage(image);
    // redImage = new SimpleImage(image);
    // greenImage = new SimpleImage(image);
    // blueImage = new SimpleImage(image);
    // rainbowImage = new SimpleImage(image); 
    // negativeImage = new SimpleImage(image); 
    // mirrorImage = new SimpleImage(image);
    // windowImage = new SimpleImage(image);
  }
}