import CardFilme from "@/components/CardFilme";
import Titulo from "@/components/Titulo";

export default function Home() {

  const filmes= [
    {
      titulo: "Sobrenatural: A Porta Vermelha",
      nota: 9.5,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6lp4uDxLqLEw1CzW1SUOYJ3zdKD.jpg"
    },
    {
      titulo: "Invocação do Mal 3: A Ordem do Demônio",
      nota: 9.8,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tLmaOXT9rMb17ISQDURKQIu3Okk.jpg"
    },
    {
      titulo: "O Ritual",
      nota: 7.5,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yFRTz69BvtqZa7VjkyNGehjVb6p.jpg"
    }
  ] 



  return ( //JSX
  <>
    <nav className="bg-slate-500 p-2 flex gap-3 items-end">
      <h1 className="text-4xl text-zinc-100 font-bold uppercase">FIAP Filmes</h1>
      <ul>
        <li>
          <a href="#">Favoritos</a>
        </li>
      </ul>
    </nav>
    <Titulo>Em alta</Titulo>
    <section className="flex flex-wrap gap-2">
      {filmes.map( filme => <CardFilme filme={filme} />)}
    </section>


    <Titulo>Lançamento</Titulo>
    </>
  )
}
