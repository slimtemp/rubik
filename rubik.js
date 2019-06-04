var transform_origin_matrix = {
  front: [
           // for rotateX, for rotateY, for rotateZ
           ['0px 150px -150px', '150px 0px -150px', '150px 150px 0px'] ,
           ['0px 150px -150px', ' 50px 0px -150px', ' 50px 150px 0px'] ,
           ['0px 150px -150px', '-50px 0px -150px', '-50px 150px 0px'] ,
           ['0px  50px -150px', '150px 0px -150px', '150px  50px 0px'] ,
           ['0px  50px -150px', ' 50px 0px -150px', ' 50px  50px 0px'] ,
           ['0px  50px -150px', '-50px 0px -150px', '-50px  50px 0px'] ,
           ['0px -50px -150px', '150px 0px -150px', '150px -50px 0px'] ,
           ['0px -50px -150px', ' 50px 0px -150px', ' 50px -50px 0px'] ,
           ['0px -50px -150px', '-50px 0px -150px', '-50px -50px 0px']
         ],
  middle:    [
           ['0px 150px -50px', '150px 0px -50px', '150px 150px 0px'] ,
           ['0px 150px -50px', ' 50px 0px -50px', ' 50px 150px 0px'] ,
           ['0px 150px -50px', '-50px 0px -50px', '-50px 150px 0px'] ,
           ['0px  50px -50px', '150px 0px -50px', '150px  50px 0px'] ,
           ['0px  50px -50px', ' 50px 0px -50px', ' 50px  50px 0px'] ,
           ['0px  50px -50px', '-50px 0px -50px', '-50px  50px 0px'] ,
           ['0px -50px -50px', '150px 0px -50px', '150px -50px 0px'] ,
           ['0px -50px -50px', ' 50px 0px -50px', ' 50px -50px 0px'] ,
           ['0px -50px -50px', '-50px 0px -50px', '-50px -50px 0px']
         ],
  back:  [
           ['0px 150px 50px', '150px 0px 50px', '150px 150px 0px'] ,
           ['0px 150px 50px', ' 50px 0px 50px', ' 50px 150px 0px'] ,
           ['0px 150px 50px', '-50px 0px 50px', '-50px 150px 0px'] ,
           ['0px  50px 50px', '150px 0px 50px', '150px  50px 0px'] ,
           ['0px  50px 50px', ' 50px 0px 50px', ' 50px  50px 0px'] ,
           ['0px  50px 50px', '-50px 0px 50px', '-50px  50px 0px'] ,
           ['0px -50px 50px', '150px 0px 50px', '150px -50px 0px'] ,
           ['0px -50px 50px', ' 50px 0px 50px', ' 50px -50px 0px'] ,
           ['0px -50px 50px', '-50px 0px 50px', '-50px -50px 0px']
         ]
}

var color_change_matrix_90_deg = {
  x1: [".front.i1 > .side1",
       ".front.i7 > .side3",
       ".front.i4 > .side1",
       ".middle.i7 > .side3",
       ".front.i7 > .side1",
       ".back.i7 > .side3",
       ".front.i7 > .side3",
       ".back.i7 > .side6",
       ".middle.i7 > .side3",
       ".back.i4 > .side6",
       ".back.i7 > .side3",
       ".back.i1 > .side6",
       ".back.i7 > .side6",
       ".back.i1 > .side2",
       ".back.i4 > .side6",
       ".middle.i1 > .side2",
       ".back.i1 > .side6",
       ".front.i1 > .side2",
       ".back.i1 > .side2",
       ".front.i1 > .side1",
       ".middle.i1 > .side2",
       ".front.i4 > .side1",
       ".front.i1 > .side2",
       ".front.i7 > .side1",
       ".front.i1 > .side4",
       ".front.i7 > .side4",
       ".front.i4 > .side4",
       ".middle.i7 > .side4",
       ".front.i7 > .side4",
       ".back.i7 > .side4",
       ".middle.i7 > .side4",
       ".back.i4 > .side4",
       ".back.i7 > .side4",
       ".back.i1 > .side4",
       ".back.i4 > .side4",
       ".middle.i1 > .side4",
       ".back.i1 > .side4",
       ".front.i1 > .side4",
       ".middle.i1 > .side4",
       ".front.i4 > .side4"] ,
  
  x2: [".front.i2 > .side1",
       ".front.i8 > .side3",
       ".front.i5 > .side1",
       ".middle.i8 > .side3",
       ".front.i8 > .side1",
       ".back.i8 > .side3",
       ".front.i8 > .side3",
       ".back.i8 > .side6",
       ".middle.i8 > .side3",
       ".back.i5 > .side6",
       ".back.i8 > .side3",
       ".back.i2 > .side6",
       ".back.i8 > .side6",
       ".back.i2 > .side2",
       ".back.i5 > .side6",
       ".middle.i2 > .side2",
       ".back.i2 > .side6",
       ".front.i2 > .side2",
       ".back.i2 > .side2",
       ".front.i2 > .side1",
       ".middle.i2 > .side2",
       ".front.i5 > .side1",
       ".front.i2 > .side2",
       ".front.i8 > .side1"] ,
  
  x3: [".front.i3 > .side1",
       ".front.i9 > .side3",
       ".front.i6 > .side1",
       ".middle.i9 > .side3",
       ".front.i9 > .side1",
       ".back.i9 > .side3",
       ".front.i9 > .side3",
       ".back.i9 > .side6",
       ".middle.i9 > .side3",
       ".back.i6 > .side6",
       ".back.i9 > .side3",
       ".back.i3 > .side6",
       ".back.i9 > .side6",
       ".back.i3 > .side2",
       ".back.i6 > .side6",
       ".middle.i3 > .side2",
       ".back.i3 > .side6",
       ".front.i3 > .side2",
       ".back.i3 > .side2",
       ".front.i3 > .side1",
       ".middle.i3 > .side2",
       ".front.i6 > .side1",
       ".front.i3 > .side2",
       ".front.i9 > .side1",
       ".front.i3 > .side5",
       ".front.i9 > .side5",
       ".front.i6 > .side5",
       ".middle.i9 > .side5",
       ".front.i9 > .side5",
       ".back.i9 > .side5",
       ".middle.i9 > .side5",
       ".back.i6 > .side5",
       ".back.i9 > .side5",
       ".back.i3 > .side5",
       ".back.i6 > .side5",
       ".middle.i3 > .side5",
       ".back.i3 > .side5",
       ".front.i3 > .side5",
       ".middle.i3 > .side5",
       ".front.i6 > .side5"] ,
  
  y1: [".front.i1 > .side1",
       ".back.i1 > .side4",
       ".front.i2 > .side1",
       ".middle.i1 > .side4",
       ".front.i3 > .side1",
       ".front.i1 > .side4",
       ".back.i1 > .side4",
       ".back.i3 > .side6",
       ".middle.i1 > .side4",
       ".back.i2 > .side6",
       ".front.i1 > .side4",
       ".back.i1 > .side6",
       ".back.i3 > .side6",
       ".front.i3 > .side5",
       ".back.i2 > .side6",
       ".middle.i3 > .side5",
       ".back.i1 > .side6",
       ".back.i3 > .side5",
       ".front.i3 > .side5",
       ".front.i1 > .side1",
       ".middle.i3 > .side5",
       ".front.i2 > .side1",
       ".back.i3 > .side5",
       ".front.i3 > .side1",
       ".front.i1 > .side2",
       ".back.i1 > .side2",
       ".front.i2 > .side2",
       ".middle.i1 > .side2",
       ".front.i3 > .side2",
       ".front.i1 > .side2",
       ".back.i1 > .side2",
       ".back.i3 > .side2",
       ".middle.i1 > .side2",
       ".back.i2 > .side2",
       ".back.i3 > .side2",
       ".front.i3 > .side2",
       ".back.i2 > .side2",
       ".middle.i3 > .side2",
       ".middle.i3 > .side2",
       ".front.i2 > .side2"] ,
  
  y2: [".front.i4 > .side1",
       ".back.i4 > .side4",
       ".front.i5 > .side1",
       ".middle.i4 > .side4",
       ".front.i6 > .side1",
       ".front.i4 > .side4",
       ".back.i4 > .side4",
       ".back.i6 > .side6",
       ".middle.i4 > .side4",
       ".back.i5 > .side6",
       ".front.i4 > .side4",
       ".back.i4 > .side6",
       ".back.i6 > .side6",
       ".front.i6 > .side5",
       ".back.i5 > .side6",
       ".middle.i6 > .side5",
       ".back.i4 > .side6",
       ".back.i6 > .side5",
       ".front.i6 > .side5",
       ".front.i4 > .side1",
       ".middle.i6 > .side5",
       ".front.i5 > .side1",
       ".back.i6 > .side5",
       ".front.i6 > .side1"] ,
  
  y3: [".front.i7 > .side1",
       ".back.i7 > .side4",
       ".front.i8 > .side1",
       ".middle.i7 > .side4",
       ".front.i9 > .side1",
       ".front.i7 > .side4",
       ".back.i7 > .side4",
       ".back.i9 > .side6",
       ".middle.i7 > .side4",
       ".back.i8 > .side6",
       ".front.i7 > .side4",
       ".back.i7 > .side6",
       ".back.i9 > .side6",
       ".front.i9 > .side5",
       ".back.i8 > .side6",
       ".middle.i9 > .side5",
       ".back.i7 > .side6",
       ".back.i9 > .side5",
       ".front.i9 > .side5",
       ".front.i7 > .side1",
       ".middle.i9 > .side5",
       ".front.i8 > .side1",
       ".back.i9 > .side5",
       ".front.i9 > .side1",
       ".front.i7 > .side3",
       ".back.i7 > .side3",
       ".front.i8 > .side3",
       ".middle.i7 > .side3",
       ".front.i9 > .side3",
       ".front.i7 > .side3",
       ".back.i7 > .side3",
       ".back.i9 > .side3",
       ".middle.i7 > .side3",
       ".back.i8 > .side3",
       ".back.i9 > .side3",
       ".front.i9 > .side3",
       ".back.i8 > .side3",
       ".middle.i9 > .side3",
       ".middle.i9 > .side3",
       ".front.i8 > .side3"] ,
  
  z1: [".front.i1 > .side2",
       ".front.i7 > .side4",
       ".front.i2 > .side2",
       ".front.i4 > .side4",
       ".front.i3 > .side2",
       ".front.i1 > .side4",
       ".front.i7 > .side4",
       ".front.i9 > .side3",
       ".front.i4 > .side4",
       ".front.i8 > .side3",
       ".front.i1 > .side4",
       ".front.i7 > .side3",
       ".front.i9 > .side3",
       ".front.i3 > .side5",
       ".front.i8 > .side3",
       ".front.i6 > .side5",
       ".front.i7 > .side3",
       ".front.i9 > .side5",
       ".front.i3 > .side5",
       ".front.i1 > .side2",
       ".front.i6 > .side5",
       ".front.i2 > .side2",
       ".front.i9 > .side5",
       ".front.i3 > .side2",
       ".front.i1 > .side1",
       ".front.i7 > .side1",
       ".front.i2 > .side1",
       ".front.i4 > .side1",
       ".front.i3 > .side1",
       ".front.i1 > .side1",
       ".front.i4 > .side1",
       ".front.i8 > .side1",
       ".front.i6 > .side1",
       ".front.i2 > .side1",
       ".front.i7 > .side1",
       ".front.i9 > .side1",
       ".front.i8 > .side1",
       ".front.i6 > .side1",
       ".front.i9 > .side1",
       ".front.i3 > .side1"] ,
  
  z2: [".middle.i1 > .side2",
       ".middle.i7 > .side4",
       ".middle.i2 > .side2",
       ".middle.i4 > .side4",
       ".middle.i3 > .side2",
       ".middle.i1 > .side4",
       ".middle.i7 > .side4",
       ".middle.i9 > .side3",
       ".middle.i4 > .side4",
       ".middle.i8 > .side3",
       ".middle.i1 > .side4",
       ".middle.i7 > .side3",
       ".middle.i9 > .side3",
       ".middle.i3 > .side5",
       ".middle.i8 > .side3",
       ".middle.i6 > .side5",
       ".middle.i7 > .side3",
       ".middle.i9 > .side5",
       ".middle.i3 > .side5",
       ".middle.i1 > .side2",
       ".middle.i6 > .side5",
       ".middle.i2 > .side2",
       ".middle.i9 > .side5",
       ".middle.i3 > .side2"] ,
  
  z3: [".back.i1 > .side2",
       ".back.i7 > .side4",
       ".back.i2 > .side2",
       ".back.i4 > .side4",
       ".back.i3 > .side2",
       ".back.i1 > .side4",
       ".back.i7 > .side4",
       ".back.i9 > .side3",
       ".back.i4 > .side4",
       ".back.i8 > .side3",
       ".back.i1 > .side4",
       ".back.i7 > .side3",
       ".back.i9 > .side3",
       ".back.i3 > .side5",
       ".back.i8 > .side3",
       ".back.i6 > .side5",
       ".back.i7 > .side3",
       ".back.i9 > .side5",
       ".back.i3 > .side5",
       ".back.i1 > .side2",
       ".back.i6 > .side5",
       ".back.i2 > .side2",
       ".back.i9 > .side5",
       ".back.i3 > .side2",
       ".back.i1 > .side6",
       ".back.i7 > .side6",
       ".back.i2 > .side6",
       ".back.i4 > .side6",
       ".back.i3 > .side6",
       ".back.i1 > .side6",
       ".back.i4 > .side6",
       ".back.i8 > .side6",
       ".back.i6 > .side6",
       ".back.i2 > .side6",
       ".back.i7 > .side6",
       ".back.i9 > .side6",
       ".back.i8 > .side6",
       ".back.i6 > .side6",
       ".back.i9 > .side6",
       ".back.i3 > .side6"]
}

// plus 1 button
document.querySelectorAll('.buttons button')[0].addEventListener('click', () =>
        { document.querySelector('#degree').value = 1
          // rotating direction is 'x', 'y' or 'z' only
          let rotate_direction = document.querySelector('#direction').value
          // target row or column is '1', '2' or '3' only
          let target_row_or_column = parseInt(document.querySelector('#row_col').value)
          let degree = parseInt(document.querySelector('#degree').value)
          rotate(rotate_direction, target_row_or_column, degree)
        })
// minus 1 button
document.querySelectorAll('.buttons button')[1].addEventListener('click', () =>
        { document.querySelector('#degree').value = -1
          // rotating direction is 'x', 'y' or 'z' only
          let rotate_direction = document.querySelector('#direction').value
          // target row or column is '1', '2' or '3' only
          let target_row_or_column = parseInt(document.querySelector('#row_col').value)
          let degree = parseInt(document.querySelector('#degree').value)
          rotate(rotate_direction, target_row_or_column, degree)
        })
// plus 10 button
document.querySelectorAll('.buttons button')[2].addEventListener('click', () =>
        { document.querySelector('#degree').value = 10
          // rotating direction is 'x', 'y' or 'z' only
          let rotate_direction = document.querySelector('#direction').value
          // target row or column is '1', '2' or '3' only
          let target_row_or_column = parseInt(document.querySelector('#row_col').value)
          let degree = parseInt(document.querySelector('#degree').value)
          rotate(rotate_direction, target_row_or_column, degree)
        })
// minus 10 button
document.querySelectorAll('.buttons button')[3].addEventListener('click', () =>
        { document.querySelector('#degree').value = -10
          // rotating direction is 'x', 'y' or 'z' only
          let rotate_direction = document.querySelector('#direction').value
          // target row or column is '1', '2' or '3' only
          let target_row_or_column = parseInt(document.querySelector('#row_col').value)
          let degree = parseInt(document.querySelector('#degree').value)
          rotate(rotate_direction, target_row_or_column, degree)
        })
// rotate 90 button
document.querySelectorAll('.buttons button')[4].addEventListener('click', () => 
        { document.querySelector('#degree').value = 90
          // rotating direction is 'x', 'y' or 'z' only
          let rotate_direction = document.querySelector('#direction').value
          // target row or column is '1', '2' or '3' only
          let target_row_or_column = parseInt(document.querySelector('#row_col').value)
          let degree = parseInt(document.querySelector('#degree').value)
          rotate(rotate_direction, target_row_or_column, degree)
        })
// get current degrees button
document.querySelectorAll('.buttons button')[5].addEventListener('click', () => 
        {
          console.log(getCurrentDegrees())
        })
// change view angles
document.querySelectorAll('.buttons button')[6].addEventListener('click', () => 
        {
          let cube = document.querySelector('.cube')
          let current_degrees = getRotateDegreesFromMatrix3dArray(getMatrix3dArray(cube))
          console.log(current_degrees)
          let new_transform = 'rotateX(' + (current_degrees[0] + 90) + 'deg) ' +
                              'rotateY(' + (current_degrees[1] + 90) + 'deg) ' +
                              'rotateZ(' + (current_degrees[2] + 90) + 'deg)'
          cube.style.transform = new_transform
          cube.style.transition = 'transform 1s linear'
        })
// rotate any degree
document.querySelectorAll('.buttons button')[7].addEventListener('click', () =>
        {
          // rotating direction is 'x', 'y' or 'z' only
          let rotate_direction = document.querySelector('#direction').value
          // target row or column is '1', '2' or '3' only
          let target_row_or_column = parseInt(document.querySelector('#row_col').value)
          let degree = parseInt(document.querySelector('#degree').value)
          rotate(rotate_direction, target_row_or_column, degree)
        })



function rotate(rotate_direction, target_row_or_column, degree) {
  let degreeX = 0, degreeY = 0, degreeZ = 0
  let target_elems = []
  if(rotate_direction === 'x') {
    degreeX = degree
    if(target_row_or_column === 1) {
      target_elems = [
                       document.querySelector('.front.i1') ,
                       document.querySelector('.front.i4') ,
                       document.querySelector('.front.i7') ,
                       document.querySelector('.middle.i1') ,
                       document.querySelector('.middle.i4') ,
                       document.querySelector('.middle.i7') ,
                       document.querySelector('.back.i1') ,
                       document.querySelector('.back.i4') ,
                       document.querySelector('.back.i7')
                     ]
    } else if(target_row_or_column === 2) {
      target_elems = [
                       document.querySelector('.front.i2') ,
                       document.querySelector('.front.i5') ,
                       document.querySelector('.front.i8') ,
                       document.querySelector('.middle.i2') ,
                       document.querySelector('.middle.i5') ,
                       document.querySelector('.middle.i8') ,
                       document.querySelector('.back.i2') ,
                       document.querySelector('.back.i5') ,
                       document.querySelector('.back.i8')
                     ]
    } else if(target_row_or_column === 3) {
      target_elems = [
                       document.querySelector('.front.i3') ,
                       document.querySelector('.front.i6') ,
                       document.querySelector('.front.i9') ,
                       document.querySelector('.middle.i3') ,
                       document.querySelector('.middle.i6') ,
                       document.querySelector('.middle.i9') ,
                       document.querySelector('.back.i3') ,
                       document.querySelector('.back.i6') ,
                       document.querySelector('.back.i9')
                     ]
    }
  } else if(rotate_direction === 'y') {
    degreeY = degree
    if(target_row_or_column === 1) {
      target_elems = [
                       document.querySelector('.front.i1') ,
                       document.querySelector('.front.i2') ,
                       document.querySelector('.front.i3') ,
                       document.querySelector('.middle.i1') ,
                       document.querySelector('.middle.i2') ,
                       document.querySelector('.middle.i3') ,
                       document.querySelector('.back.i1') ,
                       document.querySelector('.back.i2') ,
                       document.querySelector('.back.i3')
                     ]
    } else if(target_row_or_column === 2) {
      target_elems = [
                       document.querySelector('.front.i4') ,
                       document.querySelector('.front.i5') ,
                       document.querySelector('.front.i6') ,
                       document.querySelector('.middle.i4') ,
                       document.querySelector('.middle.i5') ,
                       document.querySelector('.middle.i6') ,
                       document.querySelector('.back.i4') ,
                       document.querySelector('.back.i5') ,
                       document.querySelector('.back.i6')
                     ]
    } else if(target_row_or_column === 3) {
      target_elems = [
                       document.querySelector('.front.i7') ,
                       document.querySelector('.front.i8') ,
                       document.querySelector('.front.i9') ,
                       document.querySelector('.middle.i7') ,
                       document.querySelector('.middle.i8') ,
                       document.querySelector('.middle.i9') ,
                       document.querySelector('.back.i7') ,
                       document.querySelector('.back.i8') ,
                       document.querySelector('.back.i9')
                     ]
    }
  } else if(rotate_direction === 'z') {
    degreeZ = degree
    if(target_row_or_column === 1) {
      target_elems = [
                       document.querySelector('.front.i1') ,
                       document.querySelector('.front.i2') ,
                       document.querySelector('.front.i3') ,
                       document.querySelector('.front.i4') ,
                       document.querySelector('.front.i5') ,
                       document.querySelector('.front.i6') ,
                       document.querySelector('.front.i7') ,
                       document.querySelector('.front.i8') ,
                       document.querySelector('.front.i9')
                     ]
    } else if(target_row_or_column === 2) {
      target_elems = [
                       document.querySelector('.middle.i1') ,
                       document.querySelector('.middle.i2') ,
                       document.querySelector('.middle.i3') ,
                       document.querySelector('.middle.i4') ,
                       document.querySelector('.middle.i5') ,
                       document.querySelector('.middle.i6') ,
                       document.querySelector('.middle.i7') ,
                       document.querySelector('.middle.i8') ,
                       document.querySelector('.middle.i9')
                     ]
    } else if(target_row_or_column === 3) {
      target_elems = [
                       document.querySelector('.back.i1') ,
                       document.querySelector('.back.i2') ,
                       document.querySelector('.back.i3') ,
                       document.querySelector('.back.i4') ,
                       document.querySelector('.back.i5') ,
                       document.querySelector('.back.i6') ,
                       document.querySelector('.back.i7') ,
                       document.querySelector('.back.i8') ,
                       document.querySelector('.back.i9')
                     ]
    }
  }
  
  let need_reset = false
  // rotate
  target_elems.forEach( function(el) {
    el.style.transformOrigin = getTransformOrigin(el, rotate_direction)
    let current_degrees = getRotateDegreesFromMatrix3dArray(getMatrix3dArray(el))
    let current_translations = getTraslationsFromMatrix3dArray(getMatrix3dArray(el))
    let new_transform = 'translate3d(' +
                                      current_translations[0] + 'px, ' +
                                      current_translations[1] + 'px, ' +
                                      current_translations[2] + 'px) ' +
                        'rotateX(' + (current_degrees[0] + degreeX) + 'deg) ' +
                        'rotateY(' + (current_degrees[1] + degreeY) + 'deg) ' +
                        'rotateZ(' + (current_degrees[2] + degreeZ) + 'deg)'
    el.style.transition = 'transform 1s linear'
    el.style.transform = new_transform
    // if >= 90 degree, need to reset
    if(current_degrees[0] + degreeX >= 90 || current_degrees[1] + degreeY >= 90 || current_degrees[2] + degreeZ >= 90) {
      need_reset = true
    }
  })
  // reset
  if(need_reset) {
    target_elems[0].addEventListener('transitionend', function handler() {
      resetCube(target_elems, rotate_direction, target_row_or_column)
      this.removeEventListener('transitionend', handler)
    })
  }
}



function resetCube(target_elems, rotate_direction, target_row_or_column) {
  target_elems.forEach( function(el) {
    el.style.transition = 'transform 0s linear'
    let current_translations = getTraslationsFromMatrix3dArray(getMatrix3dArray(el))
    el.style.transform = 'translate3d(' +
                                        current_translations[0] + 'px, ' +
                                        current_translations[1] + 'px, ' +
                                        current_translations[2] + 'px) ' +
                          'rotateX(0deg) ' +
                          'rotateY(0deg) ' +
                          'rotateZ(0deg)'
  })
  
  // update color
  updateColor(rotate_direction, target_row_or_column)
}



function getTransformOrigin(el, rotate_direction) {
  let cn = el.className
  let block_index = parseInt(cn.substring(cn.length-1)) - 1
  let direction_index = rotate_direction === 'x' ? 0 :
                        (rotate_direction === 'y' ? 1 : 2)
  if(cn.indexOf('front') >= 0) {
    return transform_origin_matrix.front[block_index][direction_index]
  } else if(cn.indexOf('middle') >= 0) {
    return transform_origin_matrix.middle[block_index][direction_index]
  } else if(cn.indexOf('back') >= 0) {
    return transform_origin_matrix.back[block_index][direction_index]
  }
}



function getMatrix3dArray(el) {
  let el_style = window.getComputedStyle(el)
  let matrix_string = el_style.getPropertyValue('transform')
  if(matrix_string === 'none') matrix_string = 'matrix(1, 0, 0, 1, 0, 0)'
  let values = getArrayFromMatrixString(matrix_string)
  if(matrix_string.indexOf('matrix3d') < 0) {
    // convert matrix() to matrix3d()
    values = [
               values[0], values[1],
               0, 0,
               values[2], values[3],
               0, 0, 0, 0, 1, 0,
               values[4], values[5],
               0, 1
             ]
  }
  // change some array items from string to number
  return values.map(x => x - 0)
}



function getArrayFromMatrixString(matrix_string) {
  matrix_string = matrix_string.replace('matrix3d(', '')
  matrix_string = matrix_string.replace('matrix(', '')
  matrix_string = matrix_string.replace(')', '')
  return matrix_string.split(',')
}



// this function is only for the patterns :
// rotate3d(1, 0, 0, degree) - rotateX
// rotate3d(0, 1, 0, degree) - rotateY
// rotate3d(0, 0, 1, degree) - rotateZ
function getRotateDegreesFromMatrix3dArray(matrix3d_arr) {
  let sin_value_x = matrix3d_arr[6]
  let sin_value_y = matrix3d_arr[8]
  let sin_value_z = matrix3d_arr[1]
  let cos_value_x = matrix3d_arr[0] === 1 ? matrix3d_arr[5] : 1
  let cos_value_y = matrix3d_arr[5] === 1 ? matrix3d_arr[0] : 1
  let cos_value_z = matrix3d_arr[10] === 1 ? matrix3d_arr[0] : 1
  
  let cos_values = [cos_value_x, cos_value_y, cos_value_z]
  let radian_values = [Math.asin(sin_value_x), Math.asin(sin_value_y), Math.asin(sin_value_z)]
  let degree_values = radian_values.map(function (x, i) {
    if(cos_values[i] >= 0) {
      // only return integer part
      return Math.round(180 / Math.PI * x)
    } else {
      // only return integer part
      return 180 - Math.round(180 / Math.PI * x)
    }
  })
  return degree_values
}



function getTraslationsFromMatrix3dArray(matrix3d_arr) {
  return [matrix3d_arr[12], matrix3d_arr[13], matrix3d_arr[14]]
}



function getCurrentDegrees() {
  let obj_blocks = document.querySelectorAll('.cube > div')
  let arr_obj_blocks = Array.prototype.slice.call(obj_blocks)
  return arr_obj_blocks.map(function (el){
    return { block: el.className, 
             degrees: getRotateDegreesFromMatrix3dArray(getMatrix3dArray(el))
           }
  })
}



function updateColor(rotating_direction, row_column_index) {
  let color_change_array = color_change_matrix_90_deg[rotating_direction + row_column_index]
  // get current(from) color
  let from_colors = []
  for(let i=0; i < color_change_array.length / 2; i++) {
    let update_from_elem = document.querySelector(color_change_array[2 * i + 1])
    from_colors.push(window.getComputedStyle(update_from_elem).getPropertyValue('background-color'))
  }
  // update color
  for(let i=0; i < color_change_array.length / 2; i++) {
    let update_to_elem = document.querySelector(color_change_array[2 * i])
    update_to_elem.style.backgroundColor = from_colors[i]
  }
}



document.addEventListener("mousedown", (e) => {
  // click outside the cube to hide arrows
  if(getAllAncestors(e.target).length === 1) {  //only body
    document.querySelectorAll('.arrow').forEach( function (e) {
      e.remove()
    });
  }

  // show arrows
  if (e.target.classList.contains("side1") || 
      e.target.classList.contains("side2") ||  
      e.target.classList.contains("side3") ||  
      e.target.classList.contains("side4") ||  
      e.target.classList.contains("side5") ||  
      e.target.classList.contains("side6")
     ) {
      
    //remove previous arrows
    document.querySelectorAll('.arrow').forEach( function (e) {
      e.remove()
    });
    //reset previously set z-index's
    document.querySelectorAll('div').forEach( function(e) {
      e.style.zIndex = '0'
    })

    var left_arrow = document.createElement('div')
    left_arrow.className = 'left arrow'
    var right_arrow = document.createElement('div')
    right_arrow.className = 'right arrow'
    var up_arrow = document.createElement('div')
    up_arrow.className = 'up arrow'
    var down_arrow = document.createElement('div')
    down_arrow.className = 'down arrow'
    
    e.target.appendChild(left_arrow)
    e.target.appendChild(right_arrow)
    e.target.appendChild(up_arrow)
    e.target.appendChild(down_arrow)
      
    left_arrow.style.transform = 'translateX(-50px)'
    right_arrow.style.transform = 'translateX(100px)'
    up_arrow.style.transform = 'translateY(-50px)'
    down_arrow.style.transform = 'translateY(100px)'
    
    // I don't know why the code below works....yet
    // purpose: pop up 4 arrows
    if(e.target.parentElement.classList.contains('front') && e.target.className === 'side1') {
      e.target.parentNode.style.zIndex = '1'
    } else {
      e.target.parentNode.style.zIndex = '-1'
    }
      
    // add event listener to arrows
    document.querySelectorAll('.arrow').forEach(function (el) {
      el.addEventListener('mousedown', function (e) {
        rotateByArrow(e.target)
      })
    })
  }
})



function rotateByArrow(arrow_elem) {
  let all_elems = {}
  all_elems.x = []
  all_elems.y = []
  all_elems.z = []
  all_elems.x = [
      [
       document.querySelector('.front.i1') ,
       document.querySelector('.front.i4') ,
       document.querySelector('.front.i7') ,
       document.querySelector('.middle.i1') ,
       document.querySelector('.middle.i4') ,
       document.querySelector('.middle.i7') ,
       document.querySelector('.back.i1') ,
       document.querySelector('.back.i4') ,
       document.querySelector('.back.i7')
     ],
      [
       document.querySelector('.front.i2') ,
       document.querySelector('.front.i5') ,
       document.querySelector('.front.i8') ,
       document.querySelector('.middle.i2') ,
       document.querySelector('.middle.i5') ,
       document.querySelector('.middle.i8') ,
       document.querySelector('.back.i2') ,
       document.querySelector('.back.i5') ,
       document.querySelector('.back.i8')
     ],
      [
       document.querySelector('.front.i3') ,
       document.querySelector('.front.i6') ,
       document.querySelector('.front.i9') ,
       document.querySelector('.middle.i3') ,
       document.querySelector('.middle.i6') ,
       document.querySelector('.middle.i9') ,
       document.querySelector('.back.i3') ,
       document.querySelector('.back.i6') ,
       document.querySelector('.back.i9')
     ]
  ]
    
  all_elems.y = [
      [
       document.querySelector('.front.i1') ,
       document.querySelector('.front.i2') ,
       document.querySelector('.front.i3') ,
       document.querySelector('.middle.i1') ,
       document.querySelector('.middle.i2') ,
       document.querySelector('.middle.i3') ,
       document.querySelector('.back.i1') ,
       document.querySelector('.back.i2') ,
       document.querySelector('.back.i3')
     ],
      [
       document.querySelector('.front.i4') ,
       document.querySelector('.front.i5') ,
       document.querySelector('.front.i6') ,
       document.querySelector('.middle.i4') ,
       document.querySelector('.middle.i5') ,
       document.querySelector('.middle.i6') ,
       document.querySelector('.back.i4') ,
       document.querySelector('.back.i5') ,
       document.querySelector('.back.i6')
     ],
      [
       document.querySelector('.front.i7') ,
       document.querySelector('.front.i8') ,
       document.querySelector('.front.i9') ,
       document.querySelector('.middle.i7') ,
       document.querySelector('.middle.i8') ,
       document.querySelector('.middle.i9') ,
       document.querySelector('.back.i7') ,
       document.querySelector('.back.i8') ,
       document.querySelector('.back.i9')
     ]
  ]

  all_elems.z = [
      [
       document.querySelector('.front.i1') ,
       document.querySelector('.front.i2') ,
       document.querySelector('.front.i3') ,
       document.querySelector('.front.i4') ,
       document.querySelector('.front.i5') ,
       document.querySelector('.front.i6') ,
       document.querySelector('.front.i7') ,
       document.querySelector('.front.i8') ,
       document.querySelector('.front.i9')
     ],
      [
       document.querySelector('.middle.i1') ,
       document.querySelector('.middle.i2') ,
       document.querySelector('.middle.i3') ,
       document.querySelector('.middle.i4') ,
       document.querySelector('.middle.i5') ,
       document.querySelector('.middle.i6') ,
       document.querySelector('.middle.i7') ,
       document.querySelector('.middle.i8') ,
       document.querySelector('.middle.i9')
     ],
      [
       document.querySelector('.back.i1') ,
       document.querySelector('.back.i2') ,
       document.querySelector('.back.i3') ,
       document.querySelector('.back.i4') ,
       document.querySelector('.back.i5') ,
       document.querySelector('.back.i6') ,
       document.querySelector('.back.i7') ,
       document.querySelector('.back.i8') ,
       document.querySelector('.back.i9')
     ]
  ]
  
  // determine rotate_direction and degreeX, degreeY, degreeZ
  let rotate_direction
  let degreeX = 0, degreeY = 0, degreeZ = 0
  switch(arrow_elem.parentNode.className) {
      case 'side1' :
      case 'side6' :
        switch(arrow_elem.className){
            case 'left arrow' :
              rotate_direction = 'y'
              degreeY = 90
              break
            case 'right arrow' :
              rotate_direction = 'y'
              degreeY = -90
              break
            case 'up arrow' :
              rotate_direction = 'x'
              degreeY = 90
              break
            case 'down arrow' :
              rotate_direction = 'x'
              degreeY = -90
              break
        }
        break
      case 'side2' :
      case 'side3' :
        switch(arrow_elem.className){
            case 'left arrow' :
              rotate_direction = 'z'
              degreeY = 90
              break
            case 'right arrow' :
              rotate_direction = 'z'
              degreeY = -90
              break
            case 'up arrow' :
              rotate_direction = 'x'
              degreeY = 90
              break
            case 'down arrow' :
              rotate_direction = 'x'
              degreeY = -90
              break
        }
        break
      case 'side4' :
      case 'side5' :
        switch(arrow_elem.className){
            case 'left arrow' :
              rotate_direction = 'y'
              degreeY = 90
              break
            case 'right arrow' :
              rotate_direction = 'y'
              degreeY = -90
              break
            case 'up arrow' :
              rotate_direction = 'z'
              degreeY = 90
              break
            case 'down arrow' :
              rotate_direction = 'z'
              degreeY = -90
              break
        }
        break
  }
    
  // determine target_row_or_column
  let target_row_or_column
  let target_elems = []
  for(let i=0; i<3; i++) {
    if(all_elems[rotate_direction][i].indexOf(arrow_elem.parentNode.parentNode) >= 0) {
      target_row_or_column = i+1
      target_elems = all_elems[rotate_direction][i]
      break
    }
  }
    
  let need_reset = false
  // rotate
  target_elems.forEach(function(el) {
    el.style.transformOrigin = getTransformOrigin(el, rotate_direction)
    let current_degrees = getRotateDegreesFromMatrix3dArray(getMatrix3dArray(el))
    let current_translations = getTraslationsFromMatrix3dArray(getMatrix3dArray(el))
    let new_transform = 'translate3d(' +
                                      current_translations[0] + 'px, ' +
                                      current_translations[1] + 'px, ' +
                                      current_translations[2] + 'px) ' +
                        'rotateX(' + (current_degrees[0] + degreeX) + 'deg) ' +
                        'rotateY(' + (current_degrees[1] + degreeY) + 'deg) ' +
                        'rotateZ(' + (current_degrees[2] + degreeZ) + 'deg)'
    el.style.transition = 'transform 1s linear'
    el.style.transform = new_transform
    // if >= 90 degree, need to reset
    if(current_degrees[0] + degreeX >= 90 || current_degrees[1] + degreeY >= 90 || current_degrees[2] + degreeZ >= 90) {
      need_reset = true
    }
  })
  // reset
  if(need_reset) {
    target_elems[0].addEventListener('transitionend', function handler() {
      resetCube(target_elems, rotate_direction, target_row_or_column)
      this.removeEventListener('transitionend', handler)
    })
  } 
}



function getAllAncestors(elem) {
  var p = elem;
  var p_s = [];
  p_s[0] = p;
  while(p.tagName.toUpperCase() !== 'BODY'){
    p = p.parentElement; 
    p_s[p_s.length] = p;
  }
  return p_s;
}



function getMatrix3dArrayFromStyle(sytle_string) {
  var str = sytle_string.replace('matrix3d(', '')
  var str = str.replace(')', '')
  return str.split(', ')
}



function matrix3dProduct(arr_matrix_1, arr_matrix_2){
  var output_arr_matrix = [];
  var m1 = arr_matrix_1;
  var m2 = arr_matrix_2;
  for(let i=0; i<4; i++) {
    for(let j=0; j<4; j++) {
      output_arr_matrix[4*i + j] = m1[4*i + 0] * m2[4*0 + j] + 
                                   m1[4*i + 1] * m2[4*1 + j] + 
                                   m1[4*i + 2] * m2[4*2 + j] + 
                                   m1[4*i + 3] * m2[4*3 + j] 
    }
  }
  return output_arr_matrix
}