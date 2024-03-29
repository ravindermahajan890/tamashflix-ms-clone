import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { AuthResponse } from './entities/authResponse';
import { RecaptchaGuard } from './guards/recaptcha.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiCreatedResponse({ type: AuthResponse })
  @UseGuards(RecaptchaGuard)
  signup(@Body() authDto: AuthDto) {
    return this.authService.signup(authDto);
  }

  @Post('signin')
  @ApiOkResponse({ type: AuthResponse })
  @UseGuards(RecaptchaGuard)
  signin(@Body() authDto: AuthDto) {
    return this.authService.signin(authDto);
  }
}
