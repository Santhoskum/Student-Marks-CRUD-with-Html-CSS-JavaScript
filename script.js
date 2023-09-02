let button=document.getElementById("submit")
button.addEventListener('click',addData)
let resetButton=document.getElementById('reset')
resetButton.addEventListener('click',function(){
    clear()
})

//creating empty array to store roll no,name,dept as items
        //array to use in second table
        let studentData = [];



//clearing input
function clear(){
    //clearing text,dropdown menu,date inputs
    let form=document.getElementsByClassName("clear-input");
    for(i=0;i<form.length;i++){
        form[i].value=null
    }
    //clearing gender radio inputs
    let clearRadioGender=document.getElementsByName("gender")
    for(i=0;i<clearRadioGender.length;i++){
        clearRadioGender[i].checked=false
    }
    //clearing dept radio inputs
    let clearRadioDept=document.getElementsByName("dept")
    for(i=0;i<clearRadioDept.length;i++){
        clearRadioDept[i].checked=false
    }
    //clearing check box
    let language=document.querySelectorAll(".checkbox")
    for(i=0;i<language.length;i++){
         language[i].checked=false
        
    }
   
}  

   
  

//adding values in table
function addData(){
    
    let rollno=document.querySelector("#rollno").value
    let userName=document.querySelector("#userName").value
    let gender=document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : null;
    let dob=document.getElementById("date").value
    let dept=document.querySelector('input[name="dept"]:checked') ? document.querySelector('input[name="dept"]:checked').value :null
    /*getting language*/
    let language=document.querySelectorAll(".checkbox")
    let langArr=[]
    for(i=0;i<language.length;i++){
        if(language[i].checked){
            langArr.push(language[i].value)
        }
    }
    let langVal=langArr.join(",")
    /*getting state*/
    let state=document.getElementById("location").value

//validating
    /*
    if((rollno!=null && userName!=null && gender!=null && dob!=null && dept!=null && state!=null) && (language[0].checked!=false || language[1].checked!=false || language[2].checked!=false )) {

       */
    //adding to html file
    let tbody=document.getElementById("tbody")
    let tr=document.createElement("tr")
    
    
    let td="<td class='rollnoColumn'>"+rollno+"</td><td>"+userName+"</td><td>"+gender+"</td><td>"+dob+"</td><td>"+dept+"</td><td>"+langVal+"</td><td>"+state+"</td><td><button  type='button' class='edit' >Edit</button><button class='update' style='display:none;'>Update</button><button type='button' class='delete'>Delete</button></td>" 
    tr.innerHTML=td
    tbody.appendChild(tr)/*}
    
    else{
        alert("Kindly enter all inputs")
    }*/

 
       
        
        
        
   

    
    
//while clicking edit save should come
    let editButton=document.getElementsByClassName("edit")
    for(i=0;i<editButton.length;i++){

        editButton[i].addEventListener('click',(event) =>{
            let updateButton=event.currentTarget.nextSibling;
            let submitButton=document.getElementById('submit')
            submitButton.style.display="none"

            event.currentTarget.style.display="none";
            updateButton.style.display="inline";

           

            //giving value of rollno to rollno inputbox
            let rollno=document.getElementById("rollno")
            let rollnoData=event.currentTarget.parentElement.parentElement.children[0].innerHTML
            rollno.value=rollnoData

             //giving value of name to name inputbox
             let name=document.getElementById("userName")
            let nameData=event.currentTarget.parentElement.parentElement.children[1].innerHTML
            name.value=nameData

            //giving value of gender to gender radio
            let gender=document.getElementsByName("gender")
            
            let genderData=event.currentTarget.parentElement.parentElement.children[2].innerHTML
           
            for(i=0;i<gender.length;i++){
                if(gender[i].value==genderData){
                    gender[i].checked=true
                }
            }

             //giving value of date to date input
             let dob=document.getElementById("date")
             let dobData=event.currentTarget.parentElement.parentElement.children[3].innerHTML
             dob.value=dobData

             //giving value of dept to dept radio
            let dept=document.getElementsByName("dept")
            
            let deptData=event.currentTarget.parentElement.parentElement.children[4].innerHTML
           
            for(i=0;i<dept.length;i++){
                if(dept[i].value==deptData){
                    dept[i].checked=true
                }
            }

            
            //giving value of checkbox to checkbox
            let languageData=(event.currentTarget.parentElement.parentElement.children[5].innerHTML).split(",")
            let lang=document.getElementsByClassName("checkbox")
            console.log(lang);
            for(i=0;i<lang.length;i++){
                if(languageData.includes(lang[i].value)){
                    lang[i].checked=true
                }
            }

             //giving value of state to state input
             let stateData=event.currentTarget.parentElement.parentElement.children[6].innerHTML
             let state=document.getElementById("location")
             state.value=stateData
             
          
           
            
        })



        //update button pressing
        let updateButton=document.getElementsByClassName('update')
      
        for(updatePress=0;updatePress<updateButton.length;updatePress++){
            updateButton[updatePress].addEventListener('click',function(){
                //function for update
        let tr=this.parentElement.parentElement;
        let editButton=this.previousSibling
        editButton.style.display='inline';
        this.style.display='none';
        let submitButton=document.getElementById('submit')
        submitButton.style.display='inline';

        //updating rollno
        let rollnoData=document.getElementById("rollno")
        let rollnoColumn=tr.children[0]
       
        rollnoColumn.innerHTML=""
        rollnoColumn.innerHTML=rollnoData.value

        //updating name
        let nameData=document.getElementById("userName")
        let nameColumn=tr.children[1]
    
        nameColumn.innerHTML=""
        nameColumn.innerHTML=nameData.value

        //updating gender
        let genderData=document.getElementsByName('gender')
        let gender_Column=tr.children[2]
        for(genderIterator=0;genderIterator<genderData.length;genderIterator++){
            if(genderData[genderIterator].checked==true){
                gender_Column.innerHTML=""
                gender_Column.innerHTML=genderData[genderIterator].value
            }    
           
            
        }

         //updating language
       
         let langData=document.getElementsByName('language')
            //console.log(langData,'langdata');
         let langColumn=tr.children[5]
         let array=[]
         for(langIterator=0;langIterator<langData.length;langIterator++){
             if(langData[langIterator].checked){
                array.push(langData[langIterator].value)
                langColumn.innerHTML=""
                langColumn.innerHTML=array.join(',')
             } 
         }

        //updating dept
       
        let deptData=document.getElementsByName('dept')
        
        let deptColumn=tr.children[4]
        for(deptIterator=0;deptIterator<deptData.length;deptIterator++){
            if(deptData[deptIterator].checked==true){
                deptColumn.innerHTML=""
                deptColumn.innerHTML=deptData[deptIterator].value
            }    
           
            
        }

        //updating state
        let stateData=document.getElementById('location')
        console.log({stateData});
        let stateColumn=tr.children[6]
        console.log(stateColumn);
        stateColumn.innerHTML=""
        stateColumn.innerHTML=stateData.value


        //after updateing the form should be cleared
        clear()
            })
        }
    }
  

    
    

    
  

    //delete
    let deleteButton=document.querySelectorAll('.delete')
    //deleteButton[i] === deleButtonElement
    for(deleteButtonElement=0;deleteButtonElement<deleteButton.length;deleteButtonElement++) {
        
        deleteButton[deleteButtonElement].addEventListener('click',(event)=>{
            let row=event.currentTarget.parentElement.parentElement
            row.remove()
            clear()
           
        })
    }

    //calling the clearing function
    clear()
   
   }

 
   
    



/*calculating age*/
let dateEntered=document.getElementById("date")
dateEntered.addEventListener("input",calculateAge);
function calculateAge(){
    let today=new Date()
    let birthday=new Date(dateEntered.value)
    let age=today.getFullYear()-birthday.getFullYear()
    let month=today.getMonth()-birthday.getMonth()
    let showAge=document.getElementById("displayAge")
    if(month<0 || (month==0 && today.getDate()<birthday.getDate())){
        age--
    }
    showAge.value=`${age} years `    
}

//after clicking add student button mark table should show select bar

let addStudent=document.getElementById('add_student')
addStudent.addEventListener('click',function(){

    //collecting rollno from data table
    let dataTableBody=document.getElementById('tbody').children
   
    if(dataTableBody[0]==undefined){
        alert("Kindly fill the Data Table")

        }
    else{
        //getting mark table body
         let markTableBody=document.getElementById('mark_table')

         

        console.log(dataTableBody,'dataTablebod');
   
    //loop for getting values from data table and adding to array
    for(i=0;i<dataTableBody.length;i++){
      
        studentData.push({
            Rollno:dataTableBody[i].children[0].textContent,
            Name:dataTableBody[i].children[1].textContent,
            dept:dataTableBody[i].children[4].textContent,
            selected:false
        })
    }
    
   
    
    //creating row element to append in mark table
    let tr=document.createElement('tr')

    //giving values of rollo of datatable in marktable using string concat
    let td="<td><select class='rollnoList'><option >Select RollNo</option>";

    for(i=0;i<dataTableBody.length;i++){
        if(studentData[i].selected==true){
console.log("if");
             td+="<option disabled>"+ studentData[i].Rollno+"</option>"
            
        }
        else{
            console.log("elsse");
            td+="<option>"+ studentData[i].Rollno+"</option>"
        }
    }

    td += "</select></td><td></td><td></td><td><input type='text' class='mark' ></td><td><input type='text' class='mark'  ></td><td><input type='text' class='mark'></td><td class='total'></td><td class='average'></td><td><button type='button' class='save'>save</button><button style='display:none;' type='button' class='markEdit' >Edit</button><button class='markUpdate' style='display:none;'>Update</button><button type='button' class='markDelete'>Delete</button></td>"
    
    tr.innerHTML=td
    markTableBody.appendChild(tr);

    //after clicking save edit should come
    //debugger
    let saveButton=document.getElementsByClassName("save")
    for(i=0;i<saveButton.length;i++){
        saveButton[i].addEventListener('click',function saveMark(){
            let editButton=this.nextSibling
            editButton.style.display="inline";
            this.style.display="none";
            let mark1InputBox=this.parentNode.parentNode.children[3].children[0]
            mark1InputBox.readOnly=true;
            let mark2InputBox=this.parentNode.parentNode.children[4].children[0]
           mark2InputBox.readOnly=true;
            let mark3InputBox=this.parentNode.parentNode.children[5].children[0]
           mark3InputBox.readOnly=true;
   
     
        })
    }


    //after clicking edit update should come
    let markEdit=document.getElementsByClassName('markEdit')
    for(editLoop=0;editLoop<markEdit.length;editLoop++){
        markEdit[editLoop].addEventListener('click',function(){
            this.style.display='none'
            this.nextSibling.style.display='inline';
            let mark1InputBox=this.parentNode.parentNode.children[3].children[0]
            mark1InputBox.readOnly=false;
            let mark2InputBox=this.parentNode.parentNode.children[4].children[0]
           mark2InputBox.readOnly=false;
            let mark3InputBox=this.parentNode.parentNode.children[5].children[0]
           mark3InputBox.readOnly=false;

        })

    } 


    //after clicking edit update should come
    let updateButton=document.getElementsByClassName('markUpdate')
    for(updateLoop=0;updateLoop<updateButton.length;updateLoop++){
        updateButton[updateLoop].addEventListener('click',function(){
            this.style.display='inline'
            this.previousSibling.style.display='none'
            let mark1InputBox=this.parentNode.parentNode.children[3].children[0]
            mark1InputBox.readOnly=true;
            let mark2InputBox=this.parentNode.parentNode.children[4].children[0]
           mark2InputBox.readOnly=true;
            let mark3InputBox=this.parentNode.parentNode.children[5].children[0]
           mark3InputBox.readOnly=true;
            

        })
    }


    //getting delete to delete row
    let markDelete=document.getElementsByClassName('markDelete')
    for(deleteLoop=0;deleteLoop<markDelete.length;deleteLoop++){
        markDelete[deleteLoop].addEventListener('click',function(){
            let markRow=this.parentElement.parentElement
            
            for(arrayLoop=0;arrayLoop<studentData.length;arrayLoop++){
                if(studentData[arrayLoop].Rollno==this.parentElement.parentElement.children[0].children[0].value){
                    studentData[arrayLoop].selected=false
                }
            }
            markRow.remove()
        })
    }
    
    

   /*console.log(studentData);
   var selectedRollNo=12;
   for(let studentDataLoop=0;studentDataLoop<studentData.length;studentDataLoop++){
        console.log(studentData[studentDataLoop].Rollno);
        console.log(selectedRollNo);
        if(studentData[studentDataLoop].Rollno==selectedRollNo)
            {
                console.log(studentData[studentDataLoop].Name);
            }
   }*/


  
//if click any rollno in select it should fill name,dept
    //getting select tag in mark table
   
    let clickedOption=document.getElementsByClassName('rollnoList')
    //console.log(clickedOption);
    for(i=0;i<clickedOption.length;i++){
    //console.log(i,'on for lloo');
        clickedOption[i].addEventListener('change',function(){
            //console.log(this.parentNode);

            //for getting the name,dept using rollno of that studentData array
            for(let studentDataLoop=0;studentDataLoop<studentData.length;studentDataLoop++){
                if(this.value==studentData[studentDataLoop].Rollno){
                    this.parentNode.nextSibling.innerHTML=studentData[studentDataLoop].Name
                    this.parentNode.nextSibling.nextSibling.innerHTML=studentData[studentDataLoop].dept
                    studentData[studentDataLoop].selected=true;
                }
            }

            


        

    })
}
    
  
    




    //total and average
    let mark=document.querySelectorAll(".mark")
    for(j=0;j<mark.length;j++){
    mark[j].addEventListener('input', function total(){
        let maths=Number(this.parentElement.parentElement.children[3].children[0].value)
        console.log(maths);
        
        let physics=Number(this.parentElement.parentElement.children[4].children[0].value)
        
        let chemistry=Number(this.parentElement.parentElement.children[5].children[0].value)
       
        let total=this.parentElement.parentElement.children[6]
       
        let average=total.nextSibling
        total.innerHTML=maths+physics+chemistry
        let avg=(maths+physics+chemistry)/3
        average.innerHTML=avg.toFixed(2)
    })
}

}

    
})




