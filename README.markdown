# Flipping  a card using only CSS
## Created with help from: http://www.webkit.org/blog/386/3d-transforms/

### Keys to making something flip

1. Set up 4 elements
 - A container for the card
 - A card
 - A front and back of card
 
* Interesting things learned *
- -webkit-perspective: This is what gives the impression of 3D. 

- -webkit-transform-style: preserve-3d or flat; determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.
- To actualy flip the card -webkit-transition the rotateY() property on hover over the #flip-card