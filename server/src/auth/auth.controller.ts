import { Controller, Body, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/dto/user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('me')
    async me(@Request() req) {
        return req.user
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }

    @Post('signup')
    async signUp(@Body() user: UserDto) {
        const createdUser = await this.authService.create(user);
        // this.producerService.produce({topic: 'user.created', messages:[{value: JSON.stringify(createdUser.user)}]})
        return createdUser
    }
}
