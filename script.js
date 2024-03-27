function foo(){
    var fname=document.getElementById("FirstName").value
    var mname=document.getElementById("MiddleName").value
    var lname=document.getElementById("LastName").value
    var email=document.getElementById("email").value
    var address=document.getElementById("Address").value
    console.log(fname)
    console.log(mname)
    console.log(lname)
    console.log(email)
    console.log(address)
}


function label_create(tagname,attr,attrval,content){
    var ele=document.createElement(tagname)
    ele.setAttribute(attr,attrval)
    ele.innerHTML=content
    return ele
}

function break_create(){
    var break_ele=document.createElement("br")
    return break_ele
}

function input_create(tagname,attr,attrval,idname){
    var input_ele=document.createElement(tagname)
    input_ele.setAttribute(attr,attrval)
    input_ele.id=idname
    return input_ele
}

function submit_button_create(tagname,attr1,attrval1,attr2,attrval2,attrfn,attrfnval){
var sub_ele=document.createElement(tagname)
sub_ele.setAttribute(attr1,attrval1)
sub_ele.setAttribute(attr2,attrval2)
sub_ele.setAttribute(attrfn,attrfnval)
return sub_ele
}

var fn_label=label_create("label","for","FirstName","FirstName")
var fn_br=break_create()
var input_fn=input_create("input","type","text","FirstName")
var fntxt_br=break_create()

var mn_label=label_create("label","for","MiddleName","MiddleName")
var mn_br=break_create()
var input_mn=input_create("input","type","text","MiddleName")
var mntxt_br=break_create()

var ln_label=label_create("label","for","LastName","LastName")
var ln_br=break_create()
var input_ln=input_create("input","type","text","LastName")
var lntxt_br=break_create()

var email_label=label_create("label","for","email","Email")
var el_br=break_create()
var input_email=input_create("input","type","text","email")
var eltxt_br=break_create()

var add_label=label_create("label","for","Address","Address")
var add_br=break_create()
var input_add=input_create("input","type","text","Address")
var addtxt_br=break_create()

var input_submit=submit_button_create("input","type","submit","value","submit","onclick","foo()")

document.body.append(fn_label,fn_br,input_fn,fntxt_br,mn_label,mn_br,input_mn,mntxt_br,ln_label,ln_br,input_ln,lntxt_br,email_label,el_br,input_email,eltxt_br,add_label,add_br,input_add,addtxt_br,input_submit)
