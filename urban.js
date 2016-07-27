var fs = require('fs');
var content =[];
var cont=[];
var mat=[];
var header=[];
var contasia=[];
var arrasia=["India","Pakistan"];
var sum=0;
var fine=[];
var rural="Rural population";
var urban="Urban population"

var ns=fs.createReadStream('Indicator.csv','utf-8');
ns.on('data',function(test){
    var lines=test.toString().split("\n");
 	for(var i=0;i<lines.length;i++){
       content.push(lines[i].toString());
    }
});
ns.on("end",function(){
 	header=content[0].split(",");
 	var comp=function(str){
 		for(var b=0;b<arrasia.length;b++){
 			if(str===arrasia[b])
 				return 1;
 		}
 	}
 	for(var i=1,len=content.length;i<len-1;i++){
   		var obj={};
   		var obj1={};

   		var curline=content[i].split(",");

   		if(curline[0]==="India" && (curline[2]==="Urban population (% of total)"||curline[2]==="Rural population (% of total population)")){
   			for(var j=0;j<header.length;j++){
     			obj[header[j]]=curline[j];
 			}
 			cont.push(obj);
 		}
 		if(comp(curline[0]))
 		{
 			if(curline[2]===urban||curline[2]===rural){
   				for(var k=0;k<header.length;k++){
     				obj1[header[k]]=curline[k];
 				}
 				contasia.push(obj1);
 			}
 		}
 	}
 	for(var i=0;i<cont.length;i++)
 	{
    	mat.push({'IndicatorName':cont[i].IndicatorName,'Year':cont[i].Year,'value':cont[i].Value});
 	}
 	var json_convert=JSON.stringify(mat);
 	fs.appendFile('assign9.json',json_convert);

 	 for(i=0;i<contasia.length;i++){
 	 	if(contasia[i].Year=="1960" && contasia[i].IndicatorName===rural){
 	 		sum6=parseInt(sum)+parseInt(contasia[i].Value);
 	 	}
 	 	if(contasia[i].Year=="1970" && contasia[i].IndicatorName===rural){
      sum7=parseInt(sum)+parseInt(contasia[i].Value);
    }
    if(contasia[i].Year=="1980" && contasia[i].IndicatorName===rural){
      sum8=parseInt(sum)+parseInt(contasia[i].Value);
    }
    if(contasia[i].Year=="1990" && contasia[i].IndicatorName===rural){
      sum9=parseInt(sum)+parseInt(contasia[i].Value);
    }
    if(contasia[i].Year=="2000" && contasia[i].IndicatorName===rural){
      sum0=parseInt(sum)+parseInt(contasia[i].Value);
    }
    if(contasia[i].Year=="2010" && contasia[i].IndicatorName===rural){
      sum10=parseInt(sum)+parseInt(contasia[i].Value);
    }
    if(contasia[i].Year=="2014" && contasia[i].IndicatorName===rural){
      sum15=parseInt(sum)+parseInt(contasia[i].Value);
    }
 	 	if(contasia[i].Year=="1960" && contasia[i].IndicatorName===urban){
      sumu6=parseInt(sum)+parseInt(contasia[i].Value);
    }
    if(contasia[i].Year=="1970" && contasia[i].IndicatorName===urban){
      sumu7=parseInt(sum)+parseInt(contasia[i].Value);
    }
    if(contasia[i].Year=="1980" && contasia[i].IndicatorName===urban){
      sumu8=parseInt(sum)+parseInt(contasia[i].Value);
    }
    if(contasia[i].Year=="1990" && contasia[i].IndicatorName===urban){
      sumu9=parseInt(sum)+parseInt(contasia[i].Value);
    }
    if(contasia[i].Year=="2000" && contasia[i].IndicatorName===urban){
      sumu0=parseInt(sum)+parseInt(contasia[i].Value);
    }
    if(contasia[i].Year=="2010" && contasia[i].IndicatorName===urban){
      sumu10=parseInt(sum)+parseInt(contasia[i].Value);
    }
    if(contasia[i].Year=="2014" && contasia[i].IndicatorName===urban){
      sumu15=parseInt(sum)+parseInt(contasia[i].Value);
    }
 	 }

   fine.push({'Year':'1960','Rvalue':sum6,'Uvalue':sumu6});
   fine.push({'Year':'1970','Rvalue':sum7,'Uvalue':sumu7});
   fine.push({'Year':'1980','Rvalue':sum8,'Uvalue':sumu8});
   fine.push({'Year':'1990','Rvalue':sum9,'Uvalue':sumu9});
   fine.push({'Year':'2000','Rvalue':sum0,'Uvalue':sumu0});
   fine.push({'Year':'2010','Rvalue':sum10,'Uvalue':sumu10});
   fine.push({'Year':'2015','Rvalue':sum15,'Uvalue':sumu15});

 	 var json_con=JSON.stringify(fine);
	 fs.appendFile('assign10.json',json_con);
   console.log("Success");
});