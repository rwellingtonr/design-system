import { FormEvent, useState } from "react";
import { Envelope, Lock } from "phosphor-react";
import { Checkbox } from "~/components/checkbox";
import { Button } from "~/components/button";
import { Heading } from "~/components/heading";
import { TextInput } from "~/components/textInput";
import { Text } from "~/components/text";
import { ReactSvg } from "~/styles/logo";

export function SignIn() {
	const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false);

	const handleSignIn = (event: FormEvent) => {
		event.preventDefault();
		setIsUserSignedIn(true);
	};

	return (
		<div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
			<header className="flex flex-col items-center">
				<ReactSvg className="animate-spin-slow hover:animate-spin-medium cursor-pointer" />
				<Heading size="lg" className="mt-4">
					Ignite Lab
				</Heading>
				<Text size="lg" className="text-gray-400 mt-1">
					Faça login e comece a usar!
				</Text>
			</header>
			<form
				className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
				onSubmit={handleSignIn}
			>
				{isUserSignedIn && <Text>Login realizado com sucesso!</Text>}
				<label htmlFor="email" className="flex flex-col gap-3">
					<Text className="font-semibold">Endereço de email</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Envelope />
						</TextInput.Icon>
						<TextInput.Input id="email" type="email" placeholder="Digite seu e-mail" />
					</TextInput.Root>
				</label>
				<label htmlFor="password" className="flex flex-col gap-3">
					<Text className="font-semibold">Sua senha</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Lock />
						</TextInput.Icon>
						<TextInput.Input type="password" id="password" placeholder="************" />
					</TextInput.Root>
				</label>

				<label htmlFor="Remember" className="flex items-center gap-2">
					<Checkbox id="Remember" />
					<Text size="sm" className="text-gray-200">
						Lembrar de mim por 30 dias
					</Text>
				</label>
				<Button type="submit" className="mt-4">
					Entrar na plataforma
				</Button>
			</form>
			<footer className="flex flex-col items-center gap-4 mt-8">
				<Text size="sm" asChild={true}>
					<a className="text-gray-400 underline hover:text-gray-200" href="">
						Esqueceu sua senha
					</a>
				</Text>
				<Text size="sm" asChild={true}>
					<a
						className="text-gray-400 underline hover:text-gray-200"
						href="#"
						target="_self"
						rel="noopener noreferrer"
					>
						Não possui conta{" "}
					</a>
				</Text>
			</footer>
		</div>
	);
}
