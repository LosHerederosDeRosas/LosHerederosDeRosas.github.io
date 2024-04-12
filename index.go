package main

import(
	"fmt"
	"net/http"
	"html/template"
)


func index(indexHTML http.ResponseWriter,req *http.Request){
	template,err := template.ParseFiles("index.html")
	if err == nil{
		template.Execute(indexHTML,nil)
	}else{
		fmt.Println("Error en la carga...")
	}
}

func main(){
	http.HandleFunc("/index",index)
	http.ListenAndServe(":8000",nil)
}
