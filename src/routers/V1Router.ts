import { Router } from 'express';
import ThemeARouter from './v1/themeA/ThemeARouter';
import ThemeBRouter from './v1/themeB/ThemeBRouter';

class V1Router {
  private _router = Router();
  private _subrouterA = ThemeARouter;
  private _subrouterB = ThemeBRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/themeA', this._subrouterA);
    this._router.use('/themeB', this._subrouterB);
  }
}

export = new V1Router().router;