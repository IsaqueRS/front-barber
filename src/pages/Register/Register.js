import React from "react";
import * as Components from './components_register'

function RegisterBarber() {
    const [signIn, toggle] = React.useState(true);
    return (
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Criar Conta</Components.Title>
                    <Components.Input type='text' placeholder='Nome' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Senha' />
                    <Components.Button style={{ marginTop: '8px' }}>Cadastre-se</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Entrar</Components.Title>
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Senha' />
                    <Components.Anchor href='#'>Esqueceu sua senha?</Components.Anchor>
                    <Components.Button>Sigin In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel signinIn={signIn}>
                    <Components.Title>Bem vindo!</Components.Title>
                    <Components.Paragraph>
                        Já tem uma conta?
                    </Components.Paragraph>
                    <Components.GhostButton onClick={() => toggle(true)}>
                        Entrar
                    </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                    <Components.Title>Olá!</Components.Title>
                    <Components.Paragraph>
                        Ainda Não Tem uma Conta? Clique e comece uma jornada com a gente!
                    </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Cadastre-se
                        </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

    </Components.Container>
)
}

export default RegisterBarber;