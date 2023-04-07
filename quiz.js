$(document).ready(function(){
     correct = ["Kazakhstani tenge", "19 mln", "Astana", "Islam", "apple"];
     questions = ["Which year Nazarbayev University was founded?","How many people live in Kazakhstan?", "What is the capital of Kazakhstan?","What is the most commonly practiced religion in Kazakhstan?","Which fruit originally comes from Kazakhstan?"];
     choice_options = [["kazakhstani ruble","Kazakhstani tenge","kazakhstani som","kazakhstani rupi"],["7mln","19 mln","45 mln","24 mln"],["Almaty","Kyzylorda","Shymkent","Astana"], ["Russian Orthodox Church","Islam","Kazakh Orthodox Church","Buddhism"],["orange","tangerine","papaya","apple"]]; 
     quizBox = $("#quiz-box"); 
     quizBox.append ("<div class='question'>"); 
     
     $('.question').append ("<p class='d'> Q1. What is the currency of Kazakhstan? </p>");
     $('.question').append ("<label><input type='radio' name='q1' value='a'>Kazakhstani ruble</label>")
     $('.question').append ("<label><input type='radio' name='q1' value='a'>Kazakhstani tenge</label>")
     $('.question').append ("<label><input type='radio' name='q1' value='a'>Kazakhstani som</label>")
     $('.question').append ("<label><input type='radio' name='q1' value='a'>Kazakhstani rupi</label>")
      
     $('.question').append ("<p class='d'> Q2. How many people live in Kazakhstan? </p>");
     $('.question').append ("<label><input type='radio' name='q2' value='a'>7 mln</label>")
     $('.question').append ("<label><input type='radio' name='q2' value='a'>19 mln</label>")
     $('.question').append ("<label><input type='radio' name='q2' value='a'>45 mln</label>")
     $('.question').append ("<label><input type='radio' name='q2' value='a'>24 mln</label>")
 
     $('.question').append ("<p class='d'> Q3. What is the capital of Kazakhstan? </p>");
     $('.question').append ("<label><input type='radio' name='q3' value='a'>Almaty</label>")
     $('.question').append ("<label><input type='radio' name='q3' value='a'>Kyzylorda</label>")
     $('.question').append ("<label><input type='radio' name='q3' value='a'>Shymkent</label>")
     $('.question').append ("<label><input type='radio' name='q3' value='a'>Astana</label>")
 
     $('.question').append ("<p class='d'> Q4. What is the most commonly practiced religion in Kazakhstan?</p>");
     $('.question').append ("<label><input type='radio' name='q4' value='a'>Russian Orthodox Church</label>")
     $('.question').append ("<label><input type='radio' name='q4' value='a'>Islam</label>")
     $('.question').append ("<label><input type='radio' name='q4' value='a'>Kazakh Orthodox Church</label>")
     $('.question').append ("<label><input type='radio' name='q4' value='a'>Buddhism</label>")
 
     $('.question').append ("<p class='d'> Q5. Which fruit originally comes from Kazakhstan? </p>");
     $('.question').append ("<label><input type='radio' name='q5' value='a'>orange</label>")
     $('.question').append ("<label><input type='radio' name='q5' value='a'>tangerine</label>")
     $('.question').append ("<label><input type='radio' name='q5' value='a'>papaya</label>")
     $('.question').append ("<label><input type='radio' name='q5' value='a'>apple</label>")
     countCorrect = 0;

     reset = false
    
    $("button").click (function (event){
     countCorrect = 0;
    
     console.log($(".question"))
         $("input[name=q1]").each (function (index){
                choice = $(this).parent().text(); 
                console.log(choice, $( this ).prop("checked"), correct.includes(choice), correct);
                if ($( this ).prop("checked") == true && correct.includes(choice)){
                     countCorrect += 1;
                }
         });
         $("input[name=q2]").each (function (index){
          choice = $(this).parent().text(); 
          console.log(choice, $( this ).prop("checked"), correct.includes(choice), correct);
          if ($( this ).prop("checked") == true && correct.includes(choice)){
               countCorrect += 1;
          }
        });

        $("input[name=q3]").each (function (index){
          choice = $(this).parent().text(); 
          console.log(choice, $( this ).prop("checked"), correct.includes(choice), correct);
          if ($( this ).prop("checked") == true && correct.includes(choice)){
               countCorrect += 1;
          }
        });

        $("input[name=q4]").each (function (index){
          choice = $(this).parent().text(); 
          console.log(choice, $( this ).prop("checked"), correct.includes(choice), correct);
          if ($( this ).prop("checked") == true && correct.includes(choice)){
               countCorrect += 1;
          }
        });

        $("input[name=q5]").each (function (index){
          choice = $(this).parent().text(); 
          console.log(choice, $( this ).prop("checked"), correct.includes(choice), correct);
          if ($( this ).prop("checked") == true && correct.includes(choice)){
               countCorrect += 1;
          }
        });

    $("#result").text(`Result: ${countCorrect}`)
    }); 

});