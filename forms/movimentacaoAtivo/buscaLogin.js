function buscaLogin() {
    // Busca do campo login
    var login = $('#login').val();

    // Tratamento de erro para o campo
    if (login.length < 3) { // Supondo que logins tenham pelo menos 3 caracteres
        FLUIGC.toast({
            title: 'Erro:',
            message: 'O login digitado não foi encontrado',
            type: 'danger'
        });
    } else {
        FLUIGC.toast({
            title: 'Sucesso:',
            message: 'Login encontrado com sucesso, estamos carregando os dados',
            type: 'success'
        });

        // Define os constraints e campos para o dataset
        var constraints = [DatasetFactory.createConstraint('colleaguePK.colleagueId', login, login, ConstraintType.MUST)];

        var dataset = DatasetFactory.getDataset("colleague", null, constraints, null);

        if (dataset && dataset.values.length > 0) {

            var colleagueName = dataset.values[0].colleagueName;
            $("#nome").val(colleagueName);
        
        } else {
            FLUIGC.toast({
                title: 'Erro:',
                message: 'Nenhum dado encontrado para o login fornecido',
                type: 'danger'
            });
        }
    }
}
