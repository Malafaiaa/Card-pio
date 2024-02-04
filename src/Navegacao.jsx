export function Navegacao({ atualizarPaginaSelecionada }) {
    return (
        <div className="navegacao">
            <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onChange={() => atualizarPaginaSelecionada(0)} />
            <label htmlFor="pagina-0">Pratos Principais</label>
            <input type="radio" name="opcao-pagina" id="pagina-1" onChange={() => atualizarPaginaSelecionada(1)} />
            <label htmlFor="pagina-1">Sobremesas</label>
            <input type="radio" name="opcao-pagina" id="pagina-2" onChange={() => atualizarPaginaSelecionada(2)} />
            <label htmlFor="pagina-2">Bebidas</label>
        </div>
    );
}