$(document).ready(function() {

	let currPlayer = 'X'

	$('.ticContainer').on('click', function (t) {
		let $clicked = $(t.target);
		$clicked.text(currPlayer);
		switcher();
	});

	function switcher() {

		let caseOne   = (( (($('.r1c1').text()) === 'X')   &&   (($('.r1c2').text()) === 'X')   &&   (($('.r1c3').text()) === 'X') ) || ( (($('.r1c1').text()) === 'O')   &&   (($('.r1c2').text()) === 'O')   &&  (($('.r1c3').text()) === 'O') ));

		let caseTwo   = (( (($('.r2c1').text()) === 'X')   &&   (($('.r2c2').text()) === 'X')   &&   (($('.r2c3').text()) === 'X') ) || ( (($('.r2c1').text()) === 'O')   &&   (($('.r2c2').text()) === 'O')   &&  (($('.r2c3').text()) === 'O') ));

		let caseThree = (( (($('.r3c1').text()) === 'X')   &&   (($('.r3c2').text()) === 'X')   &&   (($('.r3c3').text()) === 'X') ) || ( (($('.r3c1').text()) === 'O')   &&   (($('.r3c2').text()) === 'O')   &&  (($('.r3c3').text()) === 'O') ));

		let caseFour  = (( (($('.r1c1').text()) === 'X')   &&   (($('.r2c1').text()) === 'X')   &&   (($('.r3c1').text()) === 'X') ) || ( (($('.r1c1').text()) === 'O')   &&   (($('.r2c1').text()) === 'O')   &&  (($('.r3c1').text()) === 'O') ));

		let caseFive  = (( (($('.r3c1').text()) === 'X')   &&   (($('.r3c2').text()) === 'X')   &&   (($('.r3c3').text()) === 'X') ) || ( (($('.r3c1').text()) === 'O')   &&   (($('.r3c2').text()) === 'O')   &&  (($('.r3c3').text()) === 'O') ));

		let caseSix   = (( (($('.r1c3').text()) === 'X')   &&   (($('.r2c3').text()) === 'X')   &&   (($('.r3c3').text()) === 'X') ) || ( (($('.r1c3').text()) === 'O')   &&   (($('.r2c3').text()) === 'O')   &&  (($('.r3c3').text()) === 'O') ));

		let caseSeven = (( (($('.r1c1').text()) === 'X')   &&   (($('.r2c2').text()) === 'X')   &&   (($('.r3c3').text()) === 'X') ) || ( (($('.r1c1').text()) === 'O')   &&   (($('.r2c2').text()) === 'O')   &&  (($('.r3c3').text()) === 'O') ));

		let caseEight = (( (($('.r1c3').text()) === 'X')   &&   (($('.r2c2').text()) === 'X')   &&   (($('.r3c1').text()) === 'X') ) || ( (($('.r1c3').text()) === 'O')   &&   (($('.r2c2').text()) === 'O')   &&  (($('.r3c1').text()) === 'O') ));

		let uWin = ((caseOne === true) || (caseTwo === true) || (caseThree === true) || (caseFour === true) || (caseFive === true) || (caseSix === true) || (caseSeven === true) || (caseEight === true));

		if (currPlayer === 'X') {

			if (uWin === true) {
				alert(`Player "${currPlayer}" won!`);
				location.reload();
			}
			currPlayer = 'O';

		} else if (currPlayer === 'O') {

			 if (uWin === true) {
					alert(`Player "${currPlayer}" won!`);
					location.reload();
				}
			currPlayer = 'X';
		}
	}
})
