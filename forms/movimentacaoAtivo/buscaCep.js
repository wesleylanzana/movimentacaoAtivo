function buscaCep(){

    var cep = $("#cep").val().replace(/\D/g, '');

    if(cep.length !== 8){

        FLUIGC.toast({
            title: 'Erro:',
            message:'O cep digitado contém menos de 8 caracteres, favor corrigir',
            type:'danger'
        })
    }else{
        
        var url = `https://viacep.com.br/ws/${cep}/json`;

        fetch(url)
        .then(response => response.json())
        .then(data =>{
            if(data.erro){
                FLUIGC.toast({
                    title:'Erro:',
                    message:'O cep digitado não foi encontrado, por favor verifique.',
                    type:'danger'
                })
            }else{
                FLUIGC.toast({
                    title:'Sucesso:',
                    message:'Cep encontrado, dados carregados com sucesso',
                    type:'success'
                })

                    $('#logradouro').val(data.logradouro);
                    $('#complemento').val(data.complemento);
                    $('#bairro').val(data.bairro);
                    $('#localidade').val(data.localidade);
                    $('#uf').val(data.uf);
            }
        })



        
    }

}