document.getElementById('btn').addEventListener('click',function(e){

    e.preventDefault()

    // defining object

    var details={
        name:'',
        email:'',
        contact:'',
        address:'',
        tech1:'',
        tech2:'',
        tech3:'',
        tech4:'',
        pro1:'',
        pro2:'',
        pro3:'',
        pro4:'',
        pro5:'',
        lang1:'',
        lang2:'',
        lang3:'',
        ug_year:'',
        ug_course:'',
        ug_percentage:'',
        ug_institution:'',
        ug_board:'',
        inter_year:'',
        inter_course:'',
        inter_percentage:'',
        inter_institution:'',
        inter_board:'',
        tenth_year:'',
        tenth_course:'',
        tenth_percentage:'',
        tenth_institution:'',
        tenth_board:'',
        interest1:'',
        interest2:'',
        interest3:''
    }
        // Storing details in to the object

        details.name=document.getElementById('form_name').value;
        details.email=document.getElementById('form_email').value;
        details.contact=document.getElementById('form_contact').value;
        details.address=document.getElementById('form_address').value;
        details.tech1=document.getElementById('form_tech1').value;
        details.tech2=document.getElementById('form_tech2').value;
        details.tech3=document.getElementById('form_tech3').value;
        details.tech4=document.getElementById('form_tech4').value;
        details.pro1=document.getElementById('form_pro1').value;
        details.pro2=document.getElementById('form_pro2').value;
        details.pro3=document.getElementById('form_pro3').value;
        details.pro4=document.getElementById('form_pro4').value;
        details.pro5=document.getElementById('form_pro5').value;
        details.lang1=document.getElementById('form_lang1').value;
        details.lang2=document.getElementById('form_lang2').value;
        details.lang3=document.getElementById('form_lang3').value;
        details.ug_year=document.getElementById('form_ug_year').value;
        details.ug_course=document.getElementById('form_ug_course').value;
        details.ug_percentage=document.getElementById('form_ug_percentage').value;
        details.ug_institution=document.getElementById('form_ug_institution').value;
        details.ug_board=document.getElementById('form_ug_board').value;
        details.inter_year=document.getElementById('form_inter_year').value;
        details.inter_course=document.getElementById('form_inter_course').value;
        details.inter_percentage=document.getElementById('form_inter_percentage').value;
        details.inter_institution=document.getElementById('form_inter_institution').value;
        details.inter_board=document.getElementById('form_inter_board').value;
        details.tenth_year=document.getElementById('form_tenth_year').value;
        details.tenth_course=document.getElementById('form_tenth_course').value;
        details.tenth_percentage=document.getElementById('form_tenth_percentage').value;
        details.tenth_institution=document.getElementById('form_tenth_institution').value;
        details.tenth_board=document.getElementById('form_tenth_board').value;
        details.interest1=document.getElementById('form_interest1').value;
        details.interest2=document.getElementById('form_interest2').value;
        details.interest3=document.getElementById('form_interest3').value;

        // sending the object to other fumction

        buildResume(details)        
})
function buildResume(details){

    // injecting details into html using their id's
    document.getElementById('resume_name').innerHTML=details.name;
    document.getElementById('resume_email').innerHTML=details.email;
    document.getElementById('resume_contact').innerHTML=details.contact;
    document.getElementById('resume_address').innerHTML=details.address;
    document.getElementById('resume_tech1').innerHTML=details.tech1;
    document.getElementById('resume_tech2').innerHTML=details.tech2;
    document.getElementById('resume_tech3').innerHTML=details.tech3;
    document.getElementById('resume_tech4').innerHTML=details.tech4;
    document.getElementById('resume_pro1').innerHTML=details.pro1;
    document.getElementById('resume_pro2').innerHTML=details.pro2;
    document.getElementById('resume_pro3').innerHTML=details.pro3;
    document.getElementById('resume_pro4').innerHTML=details.pro4;
    document.getElementById('resume_pro5').innerHTML=details.pro5;
    document.getElementById('resume_lang1').innerHTML=details.lang1;
    document.getElementById('resume_lang2').innerHTML=details.lang2;
    document.getElementById('resume_lang3').innerHTML=details.lang3;
    document.getElementById('resume_ug_year').innerHTML=details.ug_year;
    document.getElementById('resume_ug_course').innerHTML=details.ug_course;
    document.getElementById('resume_ug_percentage').innerHTML=details.ug_percentage;
    document.getElementById('resume_ug_institution').innerHTML=details.ug_institution;
    document.getElementById('resume_ug_board').innerHTML=details.ug_board;
    document.getElementById('resume_inter_year').innerHTML=details.inter_year;
    document.getElementById('resume_inter_course').innerHTML=details.inter_course;
    document.getElementById('resume_inter_percentage').innerHTML=details.inter_percentage;
    document.getElementById('resume_inter_institution').innerHTML=details.inter_institution;
    document.getElementById('resume_inter_board').innerHTML=details.inter_board;
    document.getElementById('resume_tenth_year').innerHTML=details.tenth_year;
    document.getElementById('resume_tenth_course').innerHTML=details.tenth_course;
    document.getElementById('resume_tenth_percentage').innerHTML=details.tenth_percentage;
    document.getElementById('resume_tenth_institution').innerHTML=details.tenth_institution;
    document.getElementById('resume_tenth_board').innerHTML=details.tenth_board;
    document.getElementById('resume_interest1').innerHTML=details.interest1;
    document.getElementById('resume_interest2').innerHTML=details.interest2;
    document.getElementById('resume_interest3').innerHTML=details.interest3;


    // turning on the visibility of the resume div

    document.getElementById('main-div').style.visibility='visible';
}