$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display:none" = none></li>');
        $(`<img src='${enderecoDaNovaImagem}'/>`).appendTo(novoItem);
        $(`
            <div class="overlay-images-link"/>
                <a href = '${enderecoDaNovaImagem}' target='_blanck' title='Ver imagem em tamanho real'>
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);// a função conta em milisegundos, por isso 1 segundo = 1000
            $('#endereço-imagem-nova').val('')
    })
})