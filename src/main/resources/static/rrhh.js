function formEditable() {
    var form = document.getElementById("treballadorForm");
    var elements = form.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
        elements[i].disabled = false;
    }
    document.getElementById('nomComplet').style = "background-color: white;";
    document.getElementById('telefon').style = "background-color: white;";
    document.getElementById('email').style = "background-color: white;";
    document.getElementById('adreca').style = "background-color: white;";
    document.getElementById('carrecAux').style = "background-color: white;";
}

function mostrar() {
    div = document.getElementById('btns_edicio');
    div.style.display = '';
    div = document.getElementById('btn_editar');
    div.style.display = 'none';
    formEditable();
}

function validar() {
    var valid = 0;
    var nomComplet = document.getElementById('nomComplet').value;
    var nomCompletErrorBuit = document.getElementById('error-nomBuit');
    var nomCompletErrorLlarg = document.getElementById('error-nomLlarg');

    var telefon = document.getElementById('telefon').value;
    var telefonErrorLlarg = document.getElementById('error-telefonLlarg');
    var telefonErrorLletres = document.getElementById('error-telefonLletres');
    var telefonErrorBuit = document.getElementById('error-telefonBuit');

    var email = document.getElementById('email').value;
    var emailErrorLlarg = document.getElementById('error-emailLlarg');
    var emailErrorBuit = document.getElementById('error-emailBuit');

    var address = document.getElementById('adreca').value;
    var addressError = document.getElementById('error-adrecaLlarg');

    if (nomComplet.length > 60) {
        valid++;
        nomCompletErrorLlarg.style.display = 'block';
        nomCompletErrorBuit.style.display = 'none';
        document.getElementById('nomComplet').classList.add('border-danger');
    } else if (nomComplet.trim() === '' || nomComplet.length === 0) {
        valid++;
        nomCompletErrorLlarg.style.display = 'none';
        nomCompletErrorBuit.style.display = 'block';
        document.getElementById('nomComplet').classList.add('border-danger');
    } else {
        nomCompletErrorBuit.style.display = 'none';
        nomCompletErrorLlarg.style.display = 'none';
        document.getElementById('nomComplet').classList.remove('border-danger');
    }
    
    if (!/^[+\d]+$/.test(telefon)) {
        valid++;
        telefonErrorLletres.style.display = 'block';
        telefonErrorBuit.style.display = 'none';
        telefonErrorLlarg.style.display = 'none';
        document.getElementById('telefon').classList.add('border-danger');
    } else if (telefon.length > 15) {
        valid++;
        telefonErrorLletres.style.display = 'none';
        telefonErrorBuit.style.display = 'none';
        telefonErrorLlarg.style.display = 'block';
        document.getElementById('telefon').classList.add('border-danger');
    } else if (telefon.trim() === '' || telefon.length === 0) {
        valid++;
        telefonErrorLletres.style.display = 'none';
        telefonErrorBuit.style.display = 'block';
        telefonErrorLlarg.style.display = 'none';
        document.getElementById('telefon').classList.add('border-danger');
    } else {
        telefonErrorLletres.style.display = 'none';
        telefonErrorBuit.style.display = 'none';
        telefonErrorLlarg.style.display = 'none';
        document.getElementById('telefon').classList.remove('border-danger');
    }

    if (email.length > 45) {
        valid++;
        emailErrorLlarg.style.display = 'block';
        emailErrorBuit.style.display = 'none';
        document.getElementById('email').classList.add('border-danger');
    } else if (email.trim() === '' || email.length === 0) {
        valid++;
        emailErrorBuit.style.display = 'block';
        emailErrorLlarg.style.display = 'none';
        document.getElementById('email').classList.add('border-danger');
    } else {
        emailErrorLlarg.style.display = 'none';
        emailErrorBuit.style.display = 'none';
        document.getElementById('email').classList.remove('border-danger');
    }
    
    if (address.length > 100) {
        valid++;
        addressError.style.display = 'block';
        document.getElementById('address').classList.add('border-danger');
    } else if (address.trim() === '' || address.length === 0) {
        valid++;
        telefonErrorLletres.style.display = 'none';
        telefonErrorBuit.style.display = 'block';
        telefonErrorLlarg.style.display = 'none';
        document.getElementById('address').classList.add('border-danger');
    } else {
        addressError.style.display = 'none';
        document.getElementById('address').classList.remove('border-danger');
    }

    if (valid == 0) {
        return true;
    } else {
        return false;
    }
}