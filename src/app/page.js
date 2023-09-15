import CardFilme from "@/components/CardFilme";
import Titulo from "@/components/Titulo";

async function carregarDados(){
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}

export default async function Home() {

  const filmes= await carregarDados()

  return ( //JSX
  <>
    <nav className="bg-slate-500 p-2 flex gap-4 items-end">
      <h1 className="text-3xl text-zinc-100 font-bold uppercase">FIAP Filmes</h1>
      <a href="/favoritos">Favoritos</a>


    </nav>
    <Titulo>Em alta</Titulo>
    <section className="flex flex-wrap gap-2">
      {filmes.map( filme => <CardFilme filme={filme} />)}
    </section>


    <Titulo>Lançamento</Titulo>
    </>
  )
}
