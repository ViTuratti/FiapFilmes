"use client"

import Image from "next/image";
import loginimage from "@/images/login.jpg"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { serverLogin } from "@/actions/auth";

export default function Login(){
    const [email, setEmail]= useState("")
    const [senha, setSenha]= useState("")
    const {push} = useRouter()

    function login(e){
        e.preventDefault()
        if (email === "victorturattioliveira@gmail.com" && senha === "123"){
            serverLogin()
            push("/")
        }else{
            toast.error("Login inválido", {
                style:{
                    backgroundColor: '#333',
                    color: '#fff'
                }
            }
            )
        }
    }

    return(
        <div className="flex h-screen">
            <aside className="hidden md:flex">
                <Image className="h-full w-full object-cover" src={loginimage} alt=""></Image>
            </aside>

            <main className="container m-auto max-w-md p-6">
                <h1 className="text-1 font-bold">Fiap Filmes</h1>
                <form onSubmit={login} className="flex flex-col">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        className="bg-slate-500 p-1 rounded"
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label htmlFor="senha">Senha</label>
                    <input 
                        className="bg-slate-500 p-1 rounded" 
                        type="password" 
                        id="senha" 
                        value={senha} 
                        onChange={e => setSenha(e.target.value)}
                        />

                    <button className="bg-pink-600 p-2  mt-2 rounded">Entrar</button>

                </form>
            </main>
        </div>
    )
}