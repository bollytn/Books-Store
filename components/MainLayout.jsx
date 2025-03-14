import Link from "next/link"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle,DarkThemeToggle } from "flowbite-react"
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react"

export function DefaultHeader() {
    return (
        <Navbar fluid>
            <NavbarBrand as={Link} href="#">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Book Store</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#" active>
                    Home
                </NavbarLink>
                <NavbarLink as={Link} href="#">
                    About
                </NavbarLink>
                <NavbarLink href="#">Services</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle/>
        </Navbar>
    )
}

export function DefaultFooter() {
    return (
        <Footer container className="rounded-none">
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <FooterBrand
                        href="https://flowbite.com"
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Flowbite Logo"
                        name="Bollytn"
                    />
                    <FooterLinkGroup>
                        <FooterLink href="#">About</FooterLink>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Licensing</FooterLink>
                        <FooterLink href="#">Contact</FooterLink>
                    </FooterLinkGroup>
                </div>
                <FooterDivider />
                <FooterCopyright href="#" by="Bollytn" year={2025} />
            </div>
        </Footer>
    )
}

